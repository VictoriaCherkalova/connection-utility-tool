import React from "react";
import WelcomePage from "../../app/containers/WelcomePage";
import AppHeader from "../../app/components/AppHeader";
import SlideOutMessageDialog from "../../app/components/SlideOutMessageDialog";
import Button from "../../app/components/Button";
import t from '../../app/locales/translation';
import {Redirect, MemoryRouter} from "react-router-dom";

describe("WelcomePage container tests", () => {
    it("Should render <AppHeader /> component", () => {
        const wrapper = shallow(<WelcomePage />);
        expect(wrapper.find(AppHeader)).to.have.lengthOf(1);
    });

    it("Should render 'welcome' text & four links to modals", () => {
        const wrapper = shallow(<WelcomePage />);
        expect(wrapper.find(".welcome-page-title").text()).to.equal(t.WELCOME_TITLE);
        expect(wrapper.find(".welcome-page-text").text()).to.equal(t.ABOUT_TOOL);
        expect(wrapper.find(".show-link")).to.have.lengthOf(4);
    });

    // TODO: Look at this properly, check state before click & find how to check dialog (open or not?)
    it('Should show "Connect to network" dialog', () => {
        // mount() build all the children, so it needs MemoryRouter's workaround for <Router /> element inside
        const wrapper = mount(<MemoryRouter keyLength={0}><WelcomePage/></MemoryRouter>);
        const page = wrapper.find(WelcomePage);
        page.find('.show-link').at(0).simulate('click');
        expect(page.state("modalTitle")).to.equal(t.CONNECT_LAPTOP);
    });

    // TODO: need to check body text
    it('Should show "Disable wireless network" dialog', () => {
        const wrapper = mount(<MemoryRouter keyLength={0}><WelcomePage/></MemoryRouter>); 
        const page = wrapper.find(WelcomePage);
        page.find('.show-link').at(1).simulate('click');
        expect(page.state("modalTitle")).to.equal(t.DISABLE_NETWORK);
    });

    it('Should show "Disable firewall" dialog', () => {
        const wrapper = mount(<MemoryRouter keyLength={0}><WelcomePage/></MemoryRouter>); 
        const page = wrapper.find(WelcomePage);
        page.find('.show-link').at(2).simulate('click');
        expect(page.state("modalTitle")).to.equal(t.DISABLE_FIREWALL);
    });

    it('Should show "Manual discovery" dialog', () => {
        const wrapper = mount(<MemoryRouter keyLength={0}><WelcomePage/></MemoryRouter>); 
        const page = wrapper.find(WelcomePage);
        page.find('.show-link').at(3).simulate('click');
        expect(page.state("modalTitle")).to.equal(t.BACKUP_DISCOVERY);
    });

    it("Should render <Redirect /> component by clicking on scan button", () => {
        const wrapper = shallow(<WelcomePage />);
        expect(wrapper.find(Redirect)).to.have.lengthOf(0);
        expect(wrapper.state("redirectToSearch")).to.equal(false);
        wrapper.find(Button).simulate("click");
        expect(wrapper.find(Redirect)).to.have.lengthOf(1);
        expect(wrapper.state("redirectToSearch")).to.equal(true);
    });
});
