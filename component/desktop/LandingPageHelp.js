import React from "react";
import LandingPageWebNavbar from "./LandingPageWebNavbar";
import LandingPageHelpFaqs from "./LandingPageHelpFaqs";
import LandingPageFooter from "./LandingPageFooter";
import WriteModal from "./modal/WriteModal";

const icon1 = "/img/desktop/help/icon1.png";
const icon2 = "/img/desktop/help/icon2.svg";
const icon3 = "/img/desktop/help/icon3.png";
const que1 = "/img/desktop/help/que1.png";

const list = [
  {
    que: "What Is Remote Teams?",
    // ans: "Remote teams is project management software designed keeping in mind how teams spread across the world operate and collaborate on a project. Its advanced features for tasks planning and resource scheduling makes handling projects very easy.",
    ans: `Remote Teams is not a single tool but a collection / selection of multiple productivity tools that enable remote engineering teams to work together more effectively. You get hundreds of features to help you collaborate better on projects.`,
    img: que1,
  },
  {
    que: "Which Plan should i use?",
    ans: "We offer plans based on your team size so as to not charge you more than needed. So you can choose whichever plan suits your team and scope. For enterprise scale companies, you can get in touch with us for a suitable plan.",
    img: que1,
  },
  {
    que: "How Does The Billing Work?",
    ans: "We offer a 15 day trial period initially during which you can add unlimited team members. After which you would have to buy the monthly subscription of a plan of your choice. ",
    img: que1,
  },
  {
    que: "How Do I Add My Team To My Workspace?",
    ans: "When as the admin of a workspace you add a member ,an invite link is sent to the added member using which the individual can log on onto the workspace",
    img: que1,
  },
  {
    que: "How Do I Connect With My Client Over Remote Teams?",
    ans: "Similar to adding members, when you add a client, an invite link is sent to them using which they can Join your workspace.",
    img: que1,
  },
  {
    que: "Can I Change My Plan After Initial Subscription?",
    ans: "Yes, you can change it in the profile section under the plans tab. There you can select the desired plan and after the payment confirmation It will be reflected.",
    img: que1,
  },
  {
    que: "How Can I Limit Acces To Certain Data?",
    ans: "While adding a new member aboard. You can assign a role to the member which will help you Limit access ",
    img: que1,
  },

  {
    que: "What Happens To My Subscription If My Payment Fails ?",
    ans: "If your payment  fails, your subscription will go into halted state . And you would have the choice on how to resume your subscription. You can either change your payment method or you can wait for  Us to retry payment upto three times. The other option is to try the manual request option where  Once you are sure the your current payment method has sufficient balance you can request Us To retry via the same payment details. ",
    img: que1,
  },
  {
    que: "What Does Subscription Halted Means?",
    ans: "If you are getting the message subscription halted it means, your last payment failed. Once payment is successful the subscription will resume ",
    img: que1,
  },
];
const LandingPageHelp = () => {
  return (
    <div>
      <LandingPageWebNavbar activeLink="help" />
      <div className="pl-103 position-relative">
        <h1 className="web-page-title text-uppercase">Help</h1>
        <h5 className="font-36-semibold">
          We welcome suggestions, do get in touch
        </h5>
      </div>
      <div className="pl-127">
        <div className="row mx-0 align-items-center  pt-50">
          <WriteModal
            extraClass="web-grey-button"
            text="WRITE TO US"
            textClass="grey-button-18-font"
          />
          <div className="column-div pl-127">
            <h5 className="help-14-font-bold">OUR SOCIAL MEDIA ACCOUNTS</h5>
            <div className="row mx-0 align-items-center pt-20">
              <div className="help-icon1-div">
                <img src={icon1} alt="web help twitter" className="img-fluid" />
              </div>
              <div className="help-icon2-div">
                <img
                  src={icon2}
                  alt="web help facebook"
                  className="img-fluid"
                />
              </div>
              <div className="help-icon3-div">
                <img
                  src={icon3}
                  alt="web help instagram"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
        <h5 className="help-14-font-bold opacity-31 pt-73">
          YOU CAN ALSO CHECK OUT OUR FAQs
        </h5>
      </div>
      <div className="pl-184 pt-28">
        <h2 className="help-36-font">Frequently Asked Questions</h2>
      </div>
      <div className="pt-102 pl-236">
        {list.map((data, key) => (
          <div key={key}>
            <LandingPageHelpFaqs que={data.que} ans={data.ans} img={data.img} />
          </div>
        ))}
      </div>
      <div className="pt-300 pb-67">
        <LandingPageFooter />
      </div>
    </div>
  );
};

export default LandingPageHelp;
