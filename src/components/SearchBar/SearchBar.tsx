import {  Space, Text, Grid, TextInput, ActionIcon } from '@mantine/core';
import { IconSearch } from '@tabler/icons';
import { useState } from 'react';


export default function SearchBar(): JSX.Element{
    const [text, setText] = useState('');

    const handleSubmit = () => {
        console.log(text);
    }

    return(
        <div>
            <Text style={{fontWeight: '500'}}>Search by Name</Text>
            <Space h='lg' />
            <Grid align='center'>
                <Grid.Col span={10}>
                    <TextInput 
                        type = 'text'
                        value = {text}
                        onChange = {(event) => setText(event.currentTarget.value)}
                        variant="default"
                        radius="lg"
                        size="sm"
                        />
                </Grid.Col>

                <Grid.Col span={1}>
                    <ActionIcon onClick={handleSubmit} sx={{}}>
                        <IconSearch size='20px'/>
                    </ActionIcon>
                </Grid.Col>
            </Grid>
        </div>
        
    )
}