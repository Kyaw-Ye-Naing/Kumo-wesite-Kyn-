import colors from "./colors";
import fonts from "./fonts";

const ImageSeventy = props => {
    const {ParagraphText,Title,Image } = props

    return (
        <div className="mt-5">
            <div style={{ width: '100%' }}>
                <div style={{ float: 'left', width: '70%'}}><img src={Image} alt="img"/></div>
                <div style={{ float: 'none', color: colors.ParagraphColor, fontSize: fonts.body }}> 
                    <div style={{ fontSize: fonts.heading1, color: colors.TitleColor}}>{Title}</div>
                        <div className="dropdown-divider p-0 m-0" style={{color :colors.DividerColor}}></div> 
                        {ParagraphText}
                </div>
                
            </div>
        </div>
    )

}

export default ImageSeventy