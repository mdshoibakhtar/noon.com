import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
export const Aside = ({ asideMenu }) => {
    return <div style={{ height: 92 + "vh", overflowY: "scroll" }}>
        <Col sm={5} style={{ height: 100 + "%" }}>
            <Nav className="flex-column ">
                {asideMenu.data.map((item) => {
                    return <Nav.Item key={item.id}>
                        <Nav.Link eventKey={item.eventKey} className='sc-ca4e353a-1 bSlXHD '>{item.menuItem}</Nav.Link>
                    </Nav.Item>
                })}
            </Nav>
        </Col >
    </div>
}