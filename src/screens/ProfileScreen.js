import React from 'react'
import HeaderProfil from '../components/profile/HeaderProfil'
import UserProfil from '../components/profile/UserProfil'
import { TabsComponent } from '../components/tabs/Tabs'

// Navigation dans le profil

// fonction pour l'affichage du bon screen avec une route
function ProfileScreen () {
  return (
    <>
      <HeaderProfil />
      <TabsComponent
        views={[
          {
            key: 'first',
            title: 'Profil',
            component: UserProfil
          }
        ]}
        style={{ marginTop: 30 }}
      />
    </>
  )
}

export default ProfileScreen
