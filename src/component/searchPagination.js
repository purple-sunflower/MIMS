import "../css/searchPagination.css"

function Pagination(props) {

  const lastPage = Math.ceil((props.total)/(props.searchPerPage))
  const pageNumbers=[]
  for(var i=1; i<=lastPage ; i++){
    pageNumbers.push(i);
  }
  console.log(pageNumbers)

  const pageClick=(page)=>{
    alert(page)
    props.setCurrentPage(page)
  }

  const result = pageNumbers.map(
    (page) => (<span className='page'
    onClick={()=>pageClick(page)}>{page}</span>)
  )

  return (
    <div id='pagination'>
        {/* <div>총 글 갯수: {props.total}</div>
        <div>페이지당 글 갯수: {props.searchPerPage}</div> */}
        <div>{result}</div>
    </div>
  );
}

export default Pagination;