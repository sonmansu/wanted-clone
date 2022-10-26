import ArticleList from './component/ArticleList';
import ContentThumbnail from './component/ContentThumbnail';
import ContentTitle from './component/ContentTitle';
import Footer from './component/Footer';
import Header from './component/Header'
import SectionHeader from './component/SectionHeader';
import './styles/section.css'

function App() {
  return (
    <div className="App">
      <Header />
      <section>
        <div className="section-wrap">
          <SectionHeader title='3분만에 읽는 Wanted+ 아티클' subtitle='아티클 전체보기' />
          <ArticleList />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
