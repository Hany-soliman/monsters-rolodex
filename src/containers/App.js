import {monstersArr} from "../Robots";
import SearchBox from "../components/SearchBox"
import CardList from "../components/CardList";
import Scroll from "../components/Scroll"
import ErrorBoundry from "../components/ErrorBoundry";
import React, {useState, useEffect} from "react";


const App = () => {
    const [searchField, setSearchField] = useState('');
    const [monsters, setMonstersArr] = useState([]);
    const [filteredMonsters, setFilteredMonsters] = useState(monsters);

    useEffect(() => {
        setMonstersArr(monstersArr)
    }, [])

    useEffect(() => {
        const newFilteredRobots = monsters.filter(monster => {
            return monster.name.toLowerCase().includes(searchField.toLowerCase())
        })
        setFilteredMonsters(newFilteredRobots)
    }, [monsters, searchField])

    const onSearchChange = (e) => {
        const searchFieldValue = e.target.value
        setSearchField(searchFieldValue)
    }

    return (
        <div>
            <h1>Monsters Rolodex</h1>
            <SearchBox onSearchChange={onSearchChange}/>
            < Scroll>
                <ErrorBoundry>
                    <CardList monstersArr={filteredMonsters}/>
                </ErrorBoundry>
            </Scroll>
        </div>
    );
}


export default App;
