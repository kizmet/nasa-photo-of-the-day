import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Header, Grid } from "semantic-ui-react";
import Photos from "./components/Photos";
import SelectDate from "./components/SelectDate";
// use the component in your app!

const baseUrl = "https://api.nasa.gov/planetary/apod";
const apiKey = "mJbON6iwPh7fKXhfZfDYCeMoKtJ3g9zKn5hyBJuV";

function App() {
  const [photoOfDay, setPhotoOfDay] = useState([]);
  const [photos, setPhotos] = useState(photoOfDay);
  const [date, setDate] = useState('2018-03-22');
  const [toggleDate, setToggleDate] = useState('');

  
  useEffect(() => {
    const request = async () => {
      try {
        const request = await axios
          .get(baseUrl, {
            params: {
              api_key: apiKey,
              hd: false,
              date: date
            }
          })
          .then(res => {
            const data = res.data;
            setPhotoOfDay(data);
            //setPhotos(...photos, data);
          })
          // .then(res => {
          //   setPhotos(photos + photoOfDay);
          // });
      } catch (error) {
        console.log(error);
      }
    };
    request();
  }, [date]);

  useEffect(() => {
    setPhotos({...photos, photoOfDay});
  },[photoOfDay])



  const handleSubmit = () => {
    setDate(toggleDate)
  }

  return (
    <Container style={{ marginTop: "3em" }}>
      <Header as="h1">Astronomy Photo Explorer</Header>
      <Header as="h2" dividing>
        Selected Photos from Nasa Astrologists
      </Header>
      <div className="min-h-screen flex items-center justify-center">
      {console.log(photos)}
      <Grid centered columns={2}>
        <Photos photoOfDay={photoOfDay} photos={photos}/>
      <SelectDate

      handleSubmit={handleSubmit}
      date={date}
      setToggleDate={setToggleDate}
       />
      
      </Grid>
      
      
      </div>
    </Container>
  )
}

export default App;
