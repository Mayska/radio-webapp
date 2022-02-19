import Home from "../components/home"
import { MyHome } from '../interfaces/myhome'


function Index(props: any) {
  return (<>
    <Home>{props}</Home>
  </>)
}

export async function getStaticProps() {
  const res: Response = await fetch(process.env.URL_API + '/home/category/home')
  const home: MyHome[] = await res.json()
  return {
    props: {
      home,
    },
  }
};

export default Index