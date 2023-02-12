import { Box, Text, Stack, Button, ActionIcon, Space, Flex, Paper, ScrollArea} from "@mantine/core";
import { IconPlus, IconCircleMinus } from '@tabler/icons';
import { useState } from "react";

export default function BuildingBar(): JSX.Element{
    const [rows, setRows] = useState<number[]>([1, 2, 3]);

    const addRow = () => {
        setRows([...rows, rows.length + 1]);
    };
    
    const removeRow = (index: number) => {
        setRows(rows.filter((_, i) => i !== index));
    };
    
    return (
        <>
        <Box sx={{ width: 150, padding: '10px'}}>
        <Text style={{fontWeight: '500'}}>Building</Text>
        <Space h="xs" />
        <Stack spacing="xs" sx={{height: 400 }}>
            <ScrollArea>
            {rows.map((row, index) => (
                <>
                    <Paper radius='md'>
                        <Flex key={row} display="flex" justify="space-between" align='center'>
                                <Text p='sm'>{row}</Text>
                                <Button variant="subtle" onClick={() => removeRow(index)} color='dark'><IconCircleMinus size='20px'/></Button>
                        </Flex>
                    </Paper>
                    <Space h="xs" />
                </>
            ))}
            </ScrollArea>
            <ActionIcon display='flex'><IconPlus onClick={addRow}/></ActionIcon>
        </Stack>
        </Box>
        </>
    )
}