import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

const DisplayCard = ({item}) => {
    const { image, name, descrption } = item;

    return(
        <Card>
            <CardImg src = { image } alt = {name} />
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardText>{descrption}</CardText>
            </CardBody>
        </Card>

    );
};

export default DisplayCard;