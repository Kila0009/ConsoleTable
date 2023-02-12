import ConsoleTable from '@/components/ConsoleTable.tsx/ConsoleTable';
import { Center, Container, Paper } from '@mantine/core';


export default function Home() {
  return (
    <>
      <Container size="md">
      <Center style={{width: '100%', height: '100vh'}}>
      <Paper shadow="lg" radius="md" p="md" withBorder sx={{backgroundColor: '#ededed'}}>
          <ConsoleTable />
        </Paper>
      </Center>
    </Container>
    </>
  )
}
