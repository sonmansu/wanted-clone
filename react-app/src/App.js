import ArticleList from './component/ArticleList';
import ContentThumbnail from './component/ContentThumbnail';
import ContentTitle from './component/ContentTitle';
import Footer from './component/Footer';
import Header from './component/Header'
import SectionHeader from './component/SectionHeader';

function App() {
  return (
    <div className="App">
      <Header />
      <SectionHeader title='3분만에 읽는 Wanted+ 아티클' subtitle='아티클 전체보기' />
      <ArticleList />
      <Footer />
    </div>
  );
}

export default App;
