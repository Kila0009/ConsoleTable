import { Button, Stack, createStyles, Text } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    button:{
        height: '70px'
    }
}));

export default function EncodingCard(): JSX.Element{
    const {classes} = useStyles();

    return(
        <>
        <Text>Encoding Card</Text>
        <Stack spacing="sm">
            <Button className={classes.button} variant="default">View Card</Button>
            <Button className={classes.button} variant="default">Cancel Card</Button>
            <Button className={classes.button} variant="default">Renew Card</Button>
        </Stack>

        </>
    )
}