import { useRef, useEffect, useState } from 'react'
import * as tt from '@tomtom-international/web-sdk-maps'
import * as ttapi from '@tomtom-international/web-sdk-services'
import './Map.css'
import '@tomtom-international/web-sdk-maps/dist/maps.css'

const Map = ( {allEmergencies},{allVeicules} ) => {
  const mapElement = useRef()
  const [map, setMap] = useState({})
  const [longitude, setLongitude] = useState(-6.9208655)
  const [latitude, setLatitude] = useState(32.886023)


  const convertToPoints = (lngLat) => {
    return {
      point: {
        latitude: lngLat.lat,
        longitude: lngLat.lng
      }
    }
  }


  const drawRoute = (geoJson, map) => {
    if (map.getLayer('route')) {
      map.removeLayer('route')
      map.removeSource('route')
    }
    map.addLayer({
      id: 'route',
      type: 'line',
      source: {
        type: 'geojson',
        data: geoJson
      },
      paint: {
        'line-color': '#4a90e2',
        'line-width': 6
  
      }
    })
  }

  const addDeliveryMarker = (lngLat, map) => {
    const element = document.createElement('div')
    element.className = 'marker-delivery'
    new tt.Marker({
      element: element
    })
    .setLngLat(lngLat)
    .addTo(map)
  }

  useEffect(() => {
    const origin = {
      lng: longitude,
      lat: latitude,
    }
    localStorage.setItem("Latitude",latitude)
    localStorage.setItem("Longitude",longitude)
    const destinations = []

    let map = tt.map({
      key: process.env.REACT_APP_TOM_TOM_API_KEY,
      container: mapElement.current,
      stylesVisibility: {
        trafficIncidents: true,
        trafficFlow: true,
      },
      center: [longitude, latitude],
      zoom: 14,
    })
    setMap(map)

    const addMarker = (genreVeicule) => {
      const popupOffset = {
        bottom: [0, -25]
      }
      const popup = new tt.Popup({ offset: popupOffset }).setHTML('This is you!')
      const element = document.createElement('div')
      element.className = "marker-" + genreVeicule;

      const marker = new tt.Marker({
        draggable: true,
        element: element,
      })
        .setLngLat([longitude, latitude])
        .addTo(map)
      
      marker.on('dragend', () => {
        const lngLat = marker.getLngLat()
        setLongitude(lngLat.lng)
        setLatitude(lngLat.lat)
      })
      marker.setPopup(popup).togglePopup()
    }
    addMarker("ambulance");
    const sortDestinations = (locations) => {
      const pointsForDestinations = locations.map((destination) => {
        return convertToPoints(destination)
      })
      const callParameters = {
        key: process.env.REACT_APP_TOM_TOM_API_KEY,
        destinations: pointsForDestinations,
        origins: [convertToPoints(origin)],
      }
    return new Promise((resolve, reject) => {
      ttapi.services
        .matrixRouting(callParameters)
        .then((matrixAPIResults) => {
          const results = matrixAPIResults.matrix[0]
          const resultsArray = results.map((result, index) => {
            return {
              location: locations[index],
              drivingtime: result.response.routeSummary.travelTimeInSeconds,
            }
          })
          resultsArray.sort((a, b) => {
            return a.drivingtime - b.drivingtime
          })
          const sortedLocations = resultsArray.map((result) => {
            return result.location
          })
          resolve(sortedLocations)
        })
      })
    }

    const recalculateRoutes = () => {
      sortDestinations(destinations).then((sorted) => {
        sorted.unshift(origin)

        ttapi.services
          .calculateRoute({
            key: process.env.REACT_APP_TOM_TOM_API_KEY,
            locations: sorted,
          })
          .then((routeData) => {
            const geoJson = routeData.toGeoJson()
            drawRoute(geoJson, map)
        })
      })
    }

    // const regexPomp = /^camions_pompiers.*(?<!camions_pompiers)$/;
    // const regexPolice = /^station_police.*(?<!station_police)$/;
    // const regexAmb = /^ambulance_hopital.*(?<!ambulance_hopital)$/;
    // veicules?.map((veicule)=>{
    //     const result1 = regexPomp.test(veicule.nom);
    //     const result2 = regexPolice.test(veicule.nom);
    //     const result3 = regexAmb.test(veicule.nom);
    //     if(result1){
    //         setLatitude(veicule.vehicule_lat);
    //         setLongitude(veicule.vehicule_lng);
    //         addMarker("pompier");
    //     }
    //     if(result2){
    //         setLatitude(veicule.vehicule_lat);
    //         setLongitude(veicule.vehicule_lng);
    //         addMarker("police");
    //     }
    //     if(result3){
    //         setLatitude(veicule.vehicule_lat);
    //         setLongitude(veicule.vehicule_lng);
    //         addMarker("ambulance");
    //     }
    // })


    

    allEmergencies?.map((emergency) =>{
        let lngLat = {lng: emergency.site_lng, lat: emergency.site_lat};
        destinations.push(lngLat)
        addDeliveryMarker(lngLat, map)
        recalculateRoutes()
    })

    map.on('click', (e) => {
      destinations.push(e.lngLat)
      console.log("lnglat", e.lngLat);
      addDeliveryMarker(e.lngLat, map)
      recalculateRoutes()
    })

    return () => map.remove()
  }, [longitude, latitude])

  return (
    <>
      {map && (
        <div className="app">
          <div ref={mapElement} className="map" />
        </div>
      )}
    </>
  )
}

export default Map