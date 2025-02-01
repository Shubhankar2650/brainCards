import { useState } from 'react'
import AddIcon from '../assets/icons/AddIcon'
import ShareIcon from '../assets/icons/ShareIcon'
import Button from '../components/Button'
import Card from '../components/Card'
import CreateContent from '../components/CreateContent'
import Sidebar from '../components/Sidebar'

const HomePage = () => {
    const [content, setContent] = useState(false);
    return (
        <>
            <Sidebar />
            <div className='ml-72 p-4'>
                <CreateContent open={content} onClose={() => setContent(false)} />
                <div className='flex justify-end pr-10 gap-3'>
                    <Button variant='primary' title="Add Content" startIcon={<AddIcon />} onCLick={() => setContent(!content)} />
                    <Button variant='secondary' title="Share Brain" startIcon={<ShareIcon />} />
                </div>
                <div className='flex gap-3 m-4'>
                    <Card link="https://x.com/kirat_tw/status/1875218603966136424" type='twitter' title="first" />
                    <Card link="https://www.youtube.com/embed/a9Hxkc9YxGE?si=FF5IEvaTYs18APlH" type='youtube' title="second" />
                </div>
            </div >
        </>
    )
}

export default HomePage