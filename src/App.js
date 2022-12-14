import BrandList from './components/BrandList';
import BrandContextProvider from './contexts/BrandContext';

function App() {
  return (
    <div className="container-xl">
      <div className="table-responsive">
        <div className="table-wrapper">
          <div className="table.table tr th, table.table tr td ">
          <BrandContextProvider>
            <BrandList />
          </BrandContextProvider>
          
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;