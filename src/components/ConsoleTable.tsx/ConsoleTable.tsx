import BuildingBar from "../BuildingBar.tsx/BuildingBar";
import FilterBar from "../FilterBar/FilterBar";
import SearchBar from "../SearchBar/SearchBar";
import { Flex, Box, ScrollArea} from "@mantine/core";
import CellsTable from "../CellsTable/CellsTable";
import EncodingCard from "../EncodingCard/EncodingCard";

export default function ConsoleTable(): JSX.Element{
    return (
        <>
        <Flex
        justify='space-around'
        gap='md'>
            <Flex 
            gap='md'
            justify='flex-start'
            direction='row'
            p='md'>
                <BuildingBar />
            </Flex>

            <Flex
            gap='md'
            p='md'
            sx={{width: '729px', backgroundColor: 'white'}}>
                <CellsTable />
            </Flex>

            <Flex
            gap='md'
            p='md'
            sx={{width: '230px'}}
            direction='column'>
            <SearchBar />
            <FilterBar />
            </Flex>
        </Flex>
        </>
    )
}