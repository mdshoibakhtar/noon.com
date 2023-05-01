import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
export const Aside = ({ menuList }) => {
    return <Col sm={4}>
        <Nav className="flex-column  " style={{ height: 85 + "vh", overflow: "auto" }} >
            {menuList.data.map((item) => {
                return <Nav.Item key={item.id}>
                    <Nav.Link eventKey={item.eventKey} className='sc-ca4e353a-1 bSlXHD '>{item.menuItem}</Nav.Link>
                </Nav.Item>
            })}
        </Nav>
    </Col>
}