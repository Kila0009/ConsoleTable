import { Box, Text, Stack, Button, ActionIcon, Space, Flex} from "@mantine/core";
import { IconPlus } from '@tabler/icons';
import { useState } from "react";

export default function FloorBar(): JSX.Element{
    const [rows, setRows] = useState<number[]>([1]);

    const addRow = () => {
        setRows([...rows, rows.length + 1]);
    };
    
    const removeRow = (index: number) => {
        setRows(rows.filter((_, i) => i !== index));
    };
    

    return (
        <>
        <Box sx={{ width: 150, padding: '10px' }}>
        <Text style={{fontWeight: '500'}}>Floor</Text>
        <Space h="xs" />
        <Stack spacing="xs" sx={{height: 300 }}>
            <Flex display="flex" justify="space-between">
            <Button variant="subtle">All</Button>
            </Flex>
            {rows.map((row, index) => (
                <Flex key={row} display="flex" justify="space-between">
                    <Button variant="subtle" color='dark'>{row}</Button>
                    <Button variant="subtle" color='dark' onClick={() => removeRow(index)}>Cancel</Button>
                </Flex>
            ))}
            <ActionIcon display='flex'><IconPlus onClick={addRow}/></ActionIcon>
        </Stack>

        </Box>
        </>
    )
}