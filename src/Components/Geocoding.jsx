
import React , {useState , useEffect} from 'react'
import { geocoding } from './../data/index';
export default function Geocoding() {
    const [searchText , setSearchText] = useState("")
    const [searchResult, setSearchResult] = useState([])
    const [onSearch , setOnSearch] = useState(false)
    const handleSearchText = (event) => { setSearchText(event.target.value) };
     function callSearch() {

         try {
            setOnSearch(!onSearch)
            geocoding(searchText, "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJkMTQyNmJjZTg3MzU4ZmEzYTc1NjRjMjY1YTA5MzZjYyIsImlhdCI6MTY2MjAxODUyMCwic3ViIjoidGFraXMiLCJpc3MiOiJ0YWtpIn0.xfH2ME-LYJ1enQpKMrPI4B-vnFZPGaEsg4rUEp95VqY")
                .then((data) => {
             let _searchResult = []
                    data.data.map((n, index) => {
                if (index < 10) {
                 
                    _searchResult.push(<p>{n.name}</p>)
                    }
                     
                    })
                    return _searchResult
         
                }).then((_searchResult) => {
                    if (_searchResult.length == 0) {
                        _searchResult.push(<p>No result</p>)
                    }
                    setSearchResult(_searchResult)
                    setOnSearch(!onSearch)
                })
            
        } catch (err) {
            console.log("the error arrise from")
            console.log(err)
            setOnSearch(!onSearch)
        }

       
  }
  
    return (
    <div>

<div class="flex ">
    <div class=" flex ">
      <input type="search"  onChange={handleSearchText}   class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2"/>
                    
          
                        
                        <button onClick={() => callSearch()}
                        type="button" id="button-addon2"
                       className='bg-blue-600 px-[3%]'
                    > Search</button>
                        
                          
                    
                    
                    
    </div>
    </div>
            <div>
                {
                    searchResult.map((n) => {
                        return n
                    })
                }
    </div>
    </div>
  )
}

