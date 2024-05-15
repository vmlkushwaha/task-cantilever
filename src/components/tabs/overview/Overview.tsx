import { ICONS } from "../../../assets";
import { TransactionInterface } from "../../../interface/DataInterface";
import Avatar from "../../../shared/components/Avatar";
import Button, { AddNewButton } from "../../../shared/components/button";
import Progress from "../../../shared/components/progress";
import Switcher from "../../../shared/components/switcher";
import Box from "../../../shared/layout/Box";
import { GOALS_LIST, TABLE_DATA } from "../../../shared/utils/mockData";
import "./style.scss";

const Overview = () => {
  return (
    <div className="overview-container">
      <div className="overview-left">
        <Box title="Cards">
          <div className="cards-container">
            <div className="cards-details">
              <div className="credit_card-container">
                <img src={ICONS.cardArrow} className="arrow-left" alt="" />
                <img src={ICONS.creditcard} className="credit_card" alt="" />
                <img src={ICONS.cardArrow} className="arrow-right" alt="" />
              </div>
              <Progress
                style={{
                  width: "90%",
                  margin: "0 auto",
                }}
                fill={"20%"}
                minValue={350.6}
                maxValue={4000}
                label="Weekly payment limit"
              />
            </div>
            <div className="cards-seperator"></div>
            <div className="cards-balance">
              <div className="cards-balance-info">
                <h2 className="current">
                  <span>$</span>2850.75
                </h2>
                <p>Current balance</p>
              </div>
              <div className="cards-balance-info">
                <h2 className="income">
                  <span>$</span>1500.50
                </h2>
                <p>Income</p>
              </div>
              <div className="cards-balance-info">
                <h2 className="outcome">
                  <span>$</span>350.60
                </h2>
                <p>Outcome</p>
              </div>
              <div className="cards-balance-info">
                <Switcher />
                <p>Deacivate card</p>
              </div>
            </div>
          </div>
        </Box>
        <Box title="Transaction history" style={{ marginTop: "1.75rem" }}>
          <table className="table-container">
            <thead>
              <tr>
                <th>Reciever</th>
                <th>Type</th>
                <th>Date</th>
                <th>Ammount</th>
              </tr>
            </thead>
            <tbody>
              {TABLE_DATA.map((item: TransactionInterface) => {
                return (
                  <tr>
                    <td>
                      <img src={item.icon} />
                      {item.reciever}
                    </td>
                    <td>{item.type}</td>
                    <td>{item.date}</td>
                    <td>${item.price}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Box>
      </div>
      <div className="overview-right">
        <Box
          title="Goals"
          className="goals-container"
          style={{
            boxShadow: "none",
          }}>
          <AddNewButton className="addNew-goal" />
          <div className="goals_cards-container">
            {GOALS_LIST.map((item, i) => {
              return (
                <Box
                  key={i}
                  style={{
                    width: "30%",
                    padding: "0.5rem 1.15rem",
                  }}>
                  <div className="goals_card">
                    <div className="goals_card-upper">
                      <h2>{item.price}</h2>
                      <p>{item.date}</p>
                    </div>
                    <div className="goals_card-down">
                      <img src={item.ICON} alt="" />
                      <p>{item.title}</p>
                    </div>
                  </div>
                </Box>
              );
            })}
          </div>
          <img src={ICONS.cardArrow} className="swipe-right" alt="" />
        </Box>
        <Box style={{ boxShadow: "none" }} title="Outcome Statistics">
          <div className="statistics-container">
            <div className="statistics-card">
              <img src={ICONS.travel} style={{ backgroundColor: "#E4F0FF" }} />
              <Progress
                label="Shopping"
                fillColor="#FCAE73"
                fill="52%"
                style={{ width: "80%" }}
              />
              <p>52%</p>
            </div>
            <div className="statistics-card">
              <img src={ICONS.travel} style={{ backgroundColor: "#E4F0FF" }} />
              <Progress
                label="Electronics"
                fillColor="#209D43"
                fill="12%"
                style={{ width: "80%" }}
              />
              <p>12%</p>
            </div>
            <div className="statistics-card">
              <img src={ICONS.travel} style={{ backgroundColor: "#E4F0FF" }} />
              <Progress label="Travels" fill={"85%"} style={{ width: "80%" }} />
              <p>85%</p>
            </div>
          </div>
        </Box>
        <Box
          title="New transaction"
          style={{
            width: "fit-content",
          }}>
          <div className="avatar-container">
            <Avatar icon={ICONS.userPic} name={"Ann"} />
            <Avatar icon={ICONS.userPic} name={"Ann"} />
            <Avatar icon={ICONS.userPic} name={"Ann"} />
            <Avatar icon={ICONS.userPic} name={"Ann"} />
            <Avatar icon={ICONS.userPic} name={"Ann"} />
            <AddNewButton title="Add new" />
          </div>
          <div className="transaction-input-container">
            <input placeholder="0" />
            <Button
              title="Send the transfer"
              style={{ background: "#FFC145" }}
            />
          </div>
        </Box>
      </div>
    </div>
  );
};

export default Overview;
