

import './App.css'
import { Felsor } from './assets/Felsorolás'
import TagName from './assets/Header'
import { Lábléc } from './assets/lábléc'
import { Table } from './assets/Table'


function App() {


  return (
    <>
          <TagName Tartalom='Népszerű Magyar könyvek' Tagname='h1'></TagName>
          <TagName Tartalom='Népszerű könyvek felsorolása' Tagname='h2'></TagName>
          <Felsor></Felsor>
          <TagName Tartalom='Népszerű Magyar könyvek akciós ára táblázatban' Tagname='h2'></TagName>
          <Table></Table>
          <Lábléc></Lábléc>
    </>
  )
}

export default App
