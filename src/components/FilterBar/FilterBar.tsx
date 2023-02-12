// @ts-nocheck
import { Button, Stack, Text } from '@mantine/core';

export default function FilterBar(): JSX.Element {
    return (
        <>
        <Text sx={{fontWeight: '500'}}>Filter</Text>
        <Stack spacing='5px'>
            <Button variant="default">All ()</Button>
            <Button variant="default">Ocupied ()</Button>
            <Button variant="default">Unocupied ()</Button>
            <Button variant="default">Cleaning Required ()</Button>

        </Stack>
        </>
    )
}
