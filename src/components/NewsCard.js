import React from "react";
import {CardDeck, Card} from "react-bootstrap";
import SEO from './SEO';
import '../assets/styles/press.scss';
import TheGallery from '../assets/images/gallerypos.webp';
import TheGalleryBackup from '../assets/images/gallerypos.png';
import galleryBTS from '../assets/images/galleryBTS.jpg'; 
import Reveal from '../components/Reveal';


const NewsCard = () => {

  return (
    <>
    <SEO
      pageMeta={{
        title: "Press",
        keywords: ["Fashion", "F4 Speakers", "Agency", "Interviews", "Alumni"],
        description: "We are Fashion and Design Society. We are also a Fashion Agency offering students a space to pursue fashion related interests outside of their major."
      }}>
        <div className="otherNews">
        <div className="latest">
            <h4>Latest Article</h4>
            <h4 className="overlayh4">Latest Article</h4>
        </div>
        <Reveal className="cardDeck" wrapperElement="div" direction="up">
        <CardDeck>
        <Card bsPrefix="card">
            <a href="http://dailyorange.com/2020/11/virtual-fashion-show-looks-intersection-body-clothing-space/" target="_blank" rel="noopener noreferrer" >
            <div className="imgWrapNews">
            <Card.Img variant="top" src="http://s3.amazonaws.com/dailyorange/wp-content/uploads/2020/11/13235643/Image-from-iOS-5-copy.jpg" alt=""/>
            </div>
            </a>
            <Card.Body>
            <Card.Title>Virtual fashion show looks at intersection of body, clothing and space</Card.Title>
            <Card.Text>
            "This digital showcase, which features over 30 pieces by student designers, challenges the viewer to consider how garment changes meaning in 
            different spaces"
            <br/>
            <small className="text-muted">November 2020 - Gavi Azoff</small>
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <Card.Link href="http://dailyorange.com/2020/11/virtual-fashion-show-looks-intersection-body-clothing-space/" target="_blank" rel="noopener noreferrer" >
                <small className="text-muted"><b>Read the full story on The Daily Orange &#10230;</b></small></Card.Link>
            </Card.Footer>
        </Card>

        <Card bsPrefix="card">
            <a href="https://www.thenewshouse.com/life-and-style/syracuse-fadss-project-shows-the-power-of-virtual-fashion/" target="_blank" rel="noopener noreferrer" >
            <div className="imgWrapNews">
            <Card.Img as="img" variant="top" src="https://www.thenewshouse.com/wp-content/uploads/IMG_5149.JPG.jpeg" />
            </div>
            </a>
            <Card.Body>
            <Card.Title>Syracuse FADS project shows the power of virtual fashion</Card.Title>
            <Card.Text>
             "In a collaboration between fashion and architecture students, viewers are encouraged to unapologetically claim their space." 
             <br/>
             <small className="text-muted">
             November 2020 - Chandler Plante
             </small>
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <Card.Link className="cardLink" href="https://www.thenewshouse.com/life-and-style/syracuse-fadss-project-shows-the-power-of-virtual-fashion/" target="_blank" rel="noopener noreferrer" >
                <small className="text-muted"><b>Read the full story on The NewsHouse &#10230;</b></small>
            </Card.Link>
            </Card.Footer>
        </Card>

        <Card bsPrefix="card">
            <div className="imgWrapNews">
            <Card.Img variant="top" src="http://dailyorange.com/resize/800/wp-content/uploads/2020/08/17152455/FADS-dom.jpg" />
            </div>
            <Card.Body>
            <Card.Title>SU Fashion and Design Society hosts F*4 Zoom Series</Card.Title>
            <Card.Text>
            "Fashioning Future Fellows, a talk series held via Zoom with professionals in the fashion industry. 
            The series is open to all SU students, providing them with an opportunity to learn from current 
            professionals in the fashion industry."
            <br/>
            <small className="text-muted">August 2020 - Jade Chung</small>
            </Card.Text>
            </Card.Body>
            <a href="http://dailyorange.com/2020/08/su-fashion-design-society-hosts-zoom-series/" target="_blank" rel="noopener noreferrer" >
            <Card.Footer>
            <Card.Link href="http://dailyorange.com/2020/08/su-fashion-design-society-hosts-zoom-series/" target="_blank" rel="noopener noreferrer" >
                <small className="text-muted"><b>Read the full story on The Daily Orange &#10230;</b></small></Card.Link>
            </Card.Footer>
            </a>
        </Card>
        </CardDeck>
        </Reveal>

        <div className="cardDeck2">
        <CardDeck>
        <Card bsPrefix="card">
            <div className="imgWrapNews">
            <Card.Img as="img" variant="top" src={galleryBTS} />
            </div>
            <Card.Body>
            <Card.Title>Syracuse FADS presents The Gallery Fashion Show</Card.Title>
            <Card.Text>
            The interior of Skybarn was tastefully designed, draped with prints and set up with moody orange and white lights. 
            Everything about the room and mood screamed ART. All the designs reflected the theme, using colors, prints, and fabrics
            in a unique mix. 
             <br/>
             <small className="text-muted">
             December 2020 - Surya Vaidy
             </small>
            </Card.Text>
            </Card.Body>
            <a href="https://jerkmagazine.net/9mfehhs6kt2vag7aqn19w0hd2b5dka/2019/12/9/syracuse-fads-presents-the-gallery-fashion-show" target="_blank" rel="noopener noreferrer" >
            <Card.Footer>
            <Card.Link href="https://jerkmagazine.net/9mfehhs6kt2vag7aqn19w0hd2b5dka/2019/12/9/syracuse-fads-presents-the-gallery-fashion-show" target="_blank" rel="noopener noreferrer" >
                <small className="text-muted"><b>Read the full story on Jerk Magazine &#10230;</b></small>
            </Card.Link>
            </Card.Footer>
            </a>
        </Card>
        <Card bsPrefix="card">
            <div className="imgWrapNews">
            <Card.Img variant="top" srcset={TheGallery} src={TheGalleryBackup} alt="SU Student in a dress designed by a student for FADS"/>
            </div>
            <Card.Body>
            <Card.Title>Fashion and Design Society show presents students’ looks</Card.Title>
            <Card.Text>
            The Fashion and Design Society’s student-run fashion show was held at Skybarn at 8 p.m. on Dec. 6. 
            Entitled “The Gallery,” the show aimed to portray that fashion and art are interchangeable.
            <br/>
            <small className="text-muted">
            December 2019 - Mandy Kraynak
            </small>
            </Card.Text>
            </Card.Body>
            <a href="http://dailyorange.com/2019/12/fashion-design-society-show-presents-students-looks/" target="_blank" rel="noopener noreferrer" >
            <Card.Footer>
            <Card.Link href="http://dailyorange.com/2019/12/fashion-design-society-show-presents-students-looks/" target="_blank" rel="noopener noreferrer" >
                <small className="text-muted"><b>Read the full story on The Daily Orange &#10230;</b></small>
            </Card.Link>
            </Card.Footer>
            </a>
        </Card>
        <Card bsPrefix="card">
            <div className="imgWrapNews">
            <Card.Img variant="top" src="https://expo.advance.net/img/66b185f74b/width960/976_20180330mjgfashion2.jpeg" />
            </div>
            <Card.Body>
            <Card.Title>Fashion of tomorrow hits the runway at SU</Card.Title>
            <Card.Text>
            The Fashion Association of Design Students (FADS) is a student organization at Syracuse University that 
            encourages creativity and promotes fashion in the community. 
            <br/>
            <small className="text-muted">
            Jan 2019 - Michael Greenlar
            </small>
            </Card.Text>
            </Card.Body>
            <a href="https://www.syracuse.com/su-news/2018/03/fashion_of_tomorrow_hits_the_runway_at_su_photos.html" target="_blank" rel="noopener noreferrer" >
            <Card.Footer>
            <Card.Link href="https://www.syracuse.com/su-news/2018/03/fashion_of_tomorrow_hits_the_runway_at_su_photos.html" target="_blank" rel="noopener noreferrer" >
                <small className="text-muted"><b>Read the full story on Syracuse.com &#10230;</b></small>
            </Card.Link>
            </Card.Footer>
            </a>
        </Card>
        </CardDeck>
        </div>
        </div>
    </SEO>
    </>
  );
};
  
export default NewsCard;