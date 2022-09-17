const TableCode =
`import TableData from './data/tablesData.json'
class Tables extends React.Component {

    state={
        data_initial: TableData,
        data: TableData
    };
  
    componentDidMount(){
      this.appendRowItem()
    }
  
    appendRowItem = () => {
      const arr = [];

      //adding a component at 4th column at each row -> TableData[key][3]
      //checking if data is previously appended or not by checking first row
      if(TableData[0][3] === undefined) {
        Object.keys(TableData).forEach(function(key) {
          arr.push(TableData[key]);
          arr[key].push(
          <ButtonIcon
            icon={<i className="icons10-trash"></i>}
            onClick={() => {alert("Clicked Row "+key)}}
            tooltip="Delete Row"
          />
          )
        });
        this.setState({
          data: arr
        })
      }
    }
  
  
    handleInputChange = (event) => {
      const query = event.target.value
      this.setState(prevState => {
        const data = prevState.data_initial.filter(element => {
          return element[0].toLowerCase().includes(query.toLowerCase())
        })
        return {
          query,
          data
        } 
      })
    }
  
    render() {
      return (
      <NavPageContainer hasPadding animateTransition>
  
        <InputSearchBox
          placeholder="Search by Fruits"
          onChange={this.handleInputChange}/>
  
        <div className="app-hr"></div>
  
        <TableView
          columns={[
            { 'title':'Fruits' },
            { 'title':'Energy (KCal)','showSortIcon': true },
            { 'title':'Color','showSortIcon': true },
            { 'title':'Actions','showSortIcon': false, 'sortable': false }
          ]}
          rows={this.state.data}
        />
  
      </NavPageContainer>
    )
   }
  }
  
  export default Tables`;

const TableDataCode =
`[
    [
      "Papaya",
      12845,
      "Orange"
    ],
    [
      "Grapes",
      12867,
      "Green"
    ],
    [
      "Apple",
      12855,
      "Red"
    ],
    [
      "Banana",
      12812,
      "Yellow"
    ]
  ]`;

export {
    TableCode,
    TableDataCode
}