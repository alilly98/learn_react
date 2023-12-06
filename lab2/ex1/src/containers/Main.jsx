import React from 'react'
// import styled from 'styled-components'
import Song from "../components/Song";
var arraydata=[
  {
     image : "" ,
     name : "" ,
     singer : "" ,
     status : "1" ,
  },
  {
    image : "" ,
    name : "" ,
    singer : "" ,
    status : "0" ,
  },
  {
    image : "" ,
    name : "" ,
    singer : "" ,
    status : "1" ,
  }
]
function Main() {
  return (
<div>
<Song></Song>
<Song></Song>
<Song></Song>
</div>
    )
}
export default Main