import React from 'react'

const MetaData = (props) => {
    return (
    <>
    <div className='metadata-container'>
        <div className='metadata-info-container'>
            <h4 className='metadata-info-container__title'>Links</h4>
            <ul>
                <li><a target="blank" href={props.projectData.links.site}>{props.projectData.links.siteType}</a></li> <br />
                {props.projectData.links.github === undefined ? '' : <li><a target="blank" href={props.projectData.links.github}>Github</a></li>}
            </ul>
        </div>
        
        <div className='metadata-info-container'>
            <h4 className='metadata-info-container__title'>Tech &amp; tools</h4>
            <p>{props.projectData.tech}</p>
        </div>
    </div>

    <div className='metadata-container__mobile'>
        <div className='metadata-info-container'>
            <h4 className='metadata-info-container__title'>Links</h4>
            <ul>
                <li><a target="blank" href={props.projectData.links.site}>{props.projectData.links.siteType}</a></li> <br />
                {props.projectData.links.github === undefined ? '' : <li><a target="blank" href={props.projectData.links.github}>Github</a></li>}
            </ul>
        </div>

        <div className='metadata-info-container'>
            <h4 className='metadata-info-container__title'>Tech &amp; tools</h4>
            <p>{props.projectData.tech}</p>
        </div>
    </div>
    </>
    )
}

export { MetaData as default }