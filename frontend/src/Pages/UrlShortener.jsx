// // import { Container, Button, Stack, TextInput } from '@mantine/core'
// // import React from 'react'
// // import Service from '../utils/http';

// // const service = new Service();


// // export default function UrlShortener() {
// //      const [input,setInput]=useState({
// //         originalUrl:'',
// //         customUrl:'',
// //         expiresAt:'',
// //         title:''
// //      });
// //      const generateShortUrl = async () => {
// //        console.log(input?.originalUrl);
// //        try {
// //            const data = await service.post("s", input);
// //            console.log(data);
// //        } catch (error) {
// //            console.error("Error generating short URL:", error);
// //        }
// //    }


// //   return (
    
// //     <Container style={{marginTop: '80px'}}>
// //      {/* <Container> */}
// //         <Stack >
// //            URL SHORTENER
// //            <TextInput
// //       size="md"
// //       label="Original URL"
// //       withAsterisk
// //       placeholder="Input placeholder"
// //     />
// //            <TextInput
// //       size="md"
// //       label="Custom URL(Optional)"
// //     //   withAsterisk
// //       placeholder="Input placeholder"
// //     />
// //       <TextInput
// //  size="md"
// //  label="Title"
 
// //  placeholder="Input placeholder"
// // />
// //            <TextInput
// //       size="md"
// //       label="Expries In"
// //       withAsterisk
// //       placeholder="Input placeholder"
// //     />
// //     <Button variant="outline" size="md" radius="md">Button</Button>;


// //       </Stack>
// //     </Container>
// //   )
// // }


// import { Button, Container, TextInput } from '@mantine/core'
// import React, { useState } from 'react'
// import Service from '../utils/http'


// const service = new Service();


// export default function UrlShortener() {


//    const generateShortUrl = async () => {
//        console.log(input?.originalUrl);
//        try {
//            const data = await service.post("s", input);
//            console.log(data);
//        } catch (error) {
//            console.error("Error generating short URL:", error);
//        }
//    }


//    const [input, setInput] = useState({
//        originalUrl: "",
//        customUrl: "",
//        expiresAt: "",
//        title: ""
//    });


//    return (
//        <Container>
//            URL Shortener
//            <TextInput
//                size="lg"
//                label="Original Url "
//                withAsterisk
//                placeholder="Input placeholder"
//                onChange={(e) => { setInput({ ...input, originalUrl: e.target.value }) }}
//            />
//            <TextInput
//                size="lg"
//                label="Custom Url "
//             //    withAsterisk
//                placeholder="Input placeholder"
//                onChange={(e) => { setInput({ ...input, customUrl: e.target.value }) }}
//            />
//            <TextInput
//                size="lg"
//                label="Title"
//             //    withAsterisk
//                placeholder="Input placeholder"
//                onChange={(e) => { setInput({ ...input, customUrl: e.target.value }) }}
//            />
//            <TextInput
//                size="lg"
//                label="Expires At "
//                type='date'
//             //    withAsterisk
//                placeholder="Input placeholder"
//                onChange={(e) => { setInput({ ...input, customUrl: e.target.value }) }}
//            />
//            <Button
//                onClick={generateShortUrl}
//                variant="outline"
//                color="cyan"
//                size="lg"
//                radius="lg">
//                    Button
//            </Button>;


//        </Container>
//    )
// }

import { Button, Container, TextInput } from "@mantine/core";
import React, { useState } from "react";
import Service from "../utils/http";
import Response from "../Components/Response";

const service = new Service();

export default function UrlShortener() {
  const [response, setResponse] = useState(null);
  const [input, setInput] = useState({
    originalUrl: "",
    customUrl: "",
    expiresAt: "",
    title: "",
  });

  const generateShortUrl = async () => {
    console.log(input?.originalUrl);
    try {
      const data = await service.post("s", input);
      console.log(data);
      setResponse(data);
    } catch (error) {
      console.error("Error generating short URL:", error);
    }
  };

  return (
    <>
      {!response ? (
        <Container size={"xs"}>
          URL Shortener
          <TextInput
            size="lg"
            label="Original Url "
            withAsterisk
            placeholder="Input placeholder"
            onChange={(e) => {
              setInput({ ...input, originalUrl: e.target.value });
            }}
          />
          <TextInput
            size="lg"
            label="Custom Url "
            //    withAsterisk
            placeholder="Input placeholder"
            onChange={(e) => {
              setInput({ ...input, customUrl: e.target.value });
            }}
          />
          <TextInput
            size="md"
            radius="md"
            label="Title"
            //   withAsterisk
            description=""
            placeholder="Input placeholder"
          />
          <TextInput
            size="md"
            radius="md"
            type="date"
            label="Expiry Date"
            //   withAsterisk
            description=""
            placeholder="Input placeholder"
          />
          <Button
            onClick={generateShortUrl}
            variant="outline"
            color="cyan"
            size="lg"
            radius="lg"
          >
            Button
          </Button>
        </Container>
      ) : (
        <Response response={response} setResponse={setResponse}/>
      )}
    </>
  );
}



