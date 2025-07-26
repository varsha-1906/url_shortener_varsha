
import { useEffect, useState } from 'react';

import Service from '../../utils/http';
import { Avatar, Center, Stack, Text } from '@mantine/core';

const service = new Service();
export default function Profile() {

  const [profileData, setProfileData] = useState(null);

  async function getProfileData() {
    let data = await service.get('user/me');
    setProfileData(data);
    console.log(data);
  }
  useEffect(() => {
    getProfileData();
  }, []);

  return (
    // <Center>
      <Stack align='center'>

      <Avatar src={profileData?.avatar} alt="it's me" />

      <Text tt="capitalize">{profileData?.name}</Text>

      <Text c="dimmed">{profileData?.email}</Text>
      <Text c="dimmed">{profileData?._id}</Text>
      <Text c="dimmed">{profileData?.createdAt}</Text>
      </Stack>
    // </Center>

  )
}
