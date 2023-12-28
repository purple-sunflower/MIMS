// 231005 spotify 검색 실습 (가수 이름 검색 시, 앨범 나오도록)
// bootstrap 사용

import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, InputGroup, FormControl, Button, Row, Card, Pagination} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Header from './header';
import SearchPagination from './searchPagination';

const CLIENT_ID = "3a5c7bcf08c24a9cad7adbcbf594d6ba";
const CLIENT_SECRET = "97d0babb1c5e47b4ab66e70fe9794765";

function SearchAlbum() {

  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    // API Access Token
    var authParameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
    }
    fetch('https://accounts.spotify.com/api/token', authParameters)
      .then(result => result.json())
      .then(data => setAccessToken(data.access_token))
  }, [])
 
  async function search() {
    console.log("Search for " + searchInput); // Taylor Swift
    
    // Get request using search to get the Artist ID
    var searchParameters={
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer ' + accessToken
      }
    }
    // 231226 아티스트와 트랙을 같이 검색해야 하지 않을까? > 결과도 트랙이 나오도록?! > artist, track componenet 따로 나눠서,.?
    var artistID = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist', searchParameters)
      .then(response => response.json())
      .then(data => {return data.artists.items[0].id});

    console.log("Artist ID is " + artistID);
    // Get request with Artist ID grav all the albums from that artist
    var returnedAlbums = await fetch('https://api.spotify.com/v1/artists/' + artistID + '/albums' + '?include_groups=album&market=US&limit=50', searchParameters)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setAlbums(data.items)
      });

    // Display those albums to the user
  }
  console.log(albums); 

 // 230926 pagination 부분
 const [searchPerPage, setSearchPerPage] = useState(5)
 const [currentPage, setCurrentPage] = useState(1)

 const currentSearchList=(searchList)=>{
     const startIndex = (currentPage-1)*searchPerPage
     const lastIndex = startIndex+searchPerPage
     const slicedList = searchList.slice(startIndex, lastIndex)
     return slicedList
 }

  return (
    <div className="searchAlbum">
      <Header/>
      {/* Search */}
      <Container>
        <InputGroup className='mb-3' size='lg'>
          <FormControl
            placeholder='Search for Artist'
            type='input'
            onKeyUp={event => {
              if(event.key == 'Enter') {
                search();
              }
            }}
            onChange={e => setSearchInput(e.target.value)}
          />
          <Button onClick={search}>
            Search
          </Button>
        </InputGroup>
      </Container>

      {/* Result */}
      <Container>
        <Row className='mx-1 row row-cols-5'>
          {currentSearchList(albums).map( (album) => {
            console.log(album);
            return (
              <Card>
                <Card.Img src={album.images[0].url}/>
                <Card.Body>
                  <Card.Title>{album.name}</Card.Title>
                </Card.Body>
              </Card>
            )
          })}
        </Row>
      </Container>

      {/* <Pagination className="px-4" >
        {state.currnetData.map((_, index) => {
          return (
            <Pagination.Item
              onClick={() => handlePageChange(index + 1)}
              key={index + 1}
              active={index + 1 === state.activePage}
            >
              {index + 1}
            </Pagination.Item>
          );
        })}
      </Pagination> */}
      <div>
        <SearchPagination currentPage={currentPage} searchPerPage={searchPerPage} total={albums.length} setCurrentPage={setCurrentPage}/>
      </div>
      {/* 231008 bootstrap으로 pagination 해보려 하는데 잘 안됨
          기존 pagination 사용하려 함 > but albums의 mapping에서 걸림
          231009 기존 paginatoion에서 검색 결과에 따른 pagination 버튼은 잘 만들어짐
                 검색 결과를 5개씩만 보려면 currentSearchList를 사용해야함.
                 But currentSearchList 안에 변수를 뭘 넣어야 하는지 몰겠음.
          231221 pagination 숫자는 잘 나옴. but 검색 전체 결과가 나옴 (5개씩 나눠서 안나옴)
          231226 해결!!!!!!! (albums 매핑할 때, currentSearchList(albums).map 사용!)
      */}
    </div>
  );
}

export default SearchAlbum;
