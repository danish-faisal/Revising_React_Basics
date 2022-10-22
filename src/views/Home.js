import HelloWorld from "../components/HelloWorld";

const Home = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl mb-3">This is the Home page.</h1>

      <HelloWorld name="Danish" />
    </div>
  );
};

export default Home;
