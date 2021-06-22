import { Title, Description, ShopImage } from "./styles";

function Home() {
  return (
    <div>
      <Title> Movie Store </Title>
      <Description> Experience the best of movies with us </Description>
      <ShopImage
        alt="smovie shop"
        src="https://bingeddata.s3.amazonaws.com/uploads/2020/12/warner-brothers-hbo-max-2021-movies-list.jpg"
      />
    </div>
  );
}
export default Home;
