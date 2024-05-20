import Content from './content'
import Menu from './menu'
import { useSelector } from 'react-redux';

function Blog({children}) {

    const {theme} = useSelector((state: any) => state.job);

    return (
        <>
            <div className="blog">
                <Menu theme={theme}/>
                <div>
                 <div > 
                    {children}
                 </div>
                <Content />
                </div>
            </div>
        </>
    )
}

export default Blog