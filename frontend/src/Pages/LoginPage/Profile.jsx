
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
    <container size="xs" align="center" justify="center">
      <Stack
      h={300}
      bg="var(--mantine-color-body)"
      align="center"
      justify="center"
      gap="md"
      style={{marginTop: '80px'}}
    >

      <Avatar src={profileData?.avatar} alt="it's me" variant="transparent" radius="xl" size="xl" color="cyan"  />

      <Text tt="capitalize">{profileData?.name}</Text>

      <Text c="dimmed">  {profileData?.email}</Text>
      <Text size="md" ><strong>ID:</strong>{profileData?._id}</Text>
      <Text  size="md"> <strong>Created At:</strong> {profileData?.createdAt}</Text>
      </Stack>
     </container>

  )
}
