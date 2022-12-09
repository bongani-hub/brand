import BrandList from './components/BrandList';
import BrandContextProvider from './contexts/BrandContext';

function App() {
  return (
    <div className="container-xl">
      <div className="table-responsive">
        <div className="table-wrapper">
          <BrandContextProvider>
            <BrandList />
          </BrandContextProvider>
        </div>
      </div>
    </div>

  );
}

export default App;