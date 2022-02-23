import React, { useState } from 'react'
import { Container, Fab } from 'native-base'
import Icon from 'react-native-vector-icons/Ionicons'
import MapView from 'react-native-maps'
import { PermissionsAndroid } from 'react-native'

// Liste de nos trajets + emplacement bouton
function LinesScreen ({ navigation }) {
  const [mapMargin, setMapMargin] = useState(1)

  const onMapReady = () => {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
      .then((granted) => {
        setMapMargin(0)
      })
  }

  return (
    // Maps Google
    <Container style={{ maxWidth: '100%' }} h='100%' w='100%'>
      {/* <MapView
        provider='google'
        style={{
          flex: 1,
          width: '100%',
          height: '100%',
          margin: mapMargin
        }}
        zoomControlEnabled
        showsUserLocation
        showsMyLocationButton
        showsCompass
        showsScale
        onMapReady={onMapReady}
      /> */}
      <Fab
        onPress={() => navigation.navigate('Modal')}
        positon='absolute'
        bottom={100}
        right={5}
        icon={<Icon
          name='add'
          size={20}
              />}
      />
    </Container>
  )
}

export default LinesScreen
