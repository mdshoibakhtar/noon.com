import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
export const Aside = ({ menuList }) => {
    return <Col sm={4} style={{ height: 92 + "vh", overflowY: "scroll" }}>
        <Nav className="flex-column " >
            {menuList.data.map((item) => {
                return <Nav.Item key={item.id}>
                    <Nav.Link eventKey={item.eventKey} className='sc-ca4e353a-1 bSlXHD '>{item.menuItem}</Nav.Link>
                </Nav.Item>
            })}
        </Nav>
    </Col >
}