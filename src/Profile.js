import React from 'react'
import Avatar from './Avatar'
import Card from './Card'

export default function Profile(){
  return (
    <Card>
      <Avatar person={{name:'newyork', imageId: 'YfeOqp2'}} size={40}/>
      {/* <Avatar person={{name:'card2', imageId: 'OKS67lh'}} size={50}/>
      <Avatar person={{name:'card2', imageId: '1bX5QH6'}} size={60}/> */}
      
    </Card>
  )
}
