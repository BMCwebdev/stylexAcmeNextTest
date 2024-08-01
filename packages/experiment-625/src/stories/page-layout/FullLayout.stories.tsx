import type { Meta, StoryObj } from '@storybook/react';
import { PageLayoutProvider } from '../../components/PageLayoutProvider';
import { PageHeader, StartContainer, EndContainer } from '../../components/PageHeader';
import { SideNav, SideNavItems, SideNavFooter, SideNavItem } from '../../components/SideNav';
import { SideNavButton } from '../../components/SideNavButton';
import { Separator } from '../../components/Separator';
import { MainContainer } from '../../components/MainContainer';
import { ResponsiveWrapper } from '../../components/ResponsiveWrapper';
import { PageFooter } from '../../components/PageFooter';
import { Avatar } from '../../components/Avatar';
import { Menu, MenuButton, MenuItem, MenuTrigger } from '../../components/Menu';
import { DropdownSection } from '../../components/DropdownSection';
import { Header } from '../../components/Header';
import { Text } from '../../components/Text';


import './storybookOverrides.css';
import { Stack } from '../../components/layout/Stack';

const meta: Meta = {
  title: 'Page Layout/Full Example',
  // tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

const footerItems: SideNavItem[] = [
  { icon: 'HelpCircle', label: 'Help Center', to: '/help' },
];

export const FullLayout: Story = {
  render: () => (
    <PageLayoutProvider>
      <PageHeader>
        <StartContainer>
          <SideNavButton />
          <ResponsiveWrapper hideBelow="sm">
            <span style={{ backgroundColor: '#007BFF', color: 'white', padding: '5px' }}>Logo</span>
          </ResponsiveWrapper>
          <ResponsiveWrapper showAbove="md">
            <span style={{ backgroundColor: '#28A745', color: 'white', padding: '5px' }}>Navigation</span>
          </ResponsiveWrapper>
        </StartContainer>
        <EndContainer>
          <ResponsiveWrapper>
            <MenuTrigger>
              <MenuButton>
                <Avatar fallback="A" size="sm" />
              </MenuButton>
              <Menu>
                <DropdownSection>
                  <Header>
                    <Stack space="200">
                      <Avatar fallback="A" size="lg" />
                      <Stack space="25">
                        <Text size="large" weight="600" >Spark McCark</Text>
                        <Text size="medium">sparky@rufruff.org</Text>
                      </Stack>
                    </Stack>
                  </Header>
                </DropdownSection>
                <Separator />
                <DropdownSection xBleed={true}>
                  <MenuItem onAction={() => console.log('My settings activated')}>My settings</MenuItem>
                  <MenuItem onAction={() => console.log('Log out activated')}>Log Out</MenuItem>
                </DropdownSection>
              </Menu>
            </MenuTrigger>
          </ResponsiveWrapper>
        </EndContainer>
      </PageHeader>
      <SideNav>
        <SideNavItems
          navItems={[
            { icon: 'Home', label: 'Home', to: '/', isActive: true },
            { icon: 'Banknote', label: 'Donate', to: '/donate', isNewWindow: true },
            { icon: 'Menu', label: 'Menu', to: '/Menu' },
          ]}
        />
        <Separator orientation="horizontal" />
        <SideNavItems
          navItems={[
            { icon: 'Gift', label: 'Gifts', to: '/gifts' },
            { icon: 'LogOut', label: 'Log Out', to: '/', isNewWindow: true },
          ]}
        />
        <SideNavFooter>
          <SideNavItems navItems={footerItems} />
        </SideNavFooter>
      </SideNav>
      <MainContainer>
        <h1>Main Content Area</h1>
        <p>This is where the main content of the page would go.</p>
      </MainContainer>
      <PageFooter>
        <span>© 2024 Bonterra</span>
        <span>Terms of Service</span>
        <span>Privacy Policy</span>
      </PageFooter>
    </PageLayoutProvider>
  ),
} satisfies Story;

export const LongLayout: Story = {
  render: () => (
    <PageLayoutProvider>
      <PageHeader>
        <StartContainer>
          <SideNavButton />
          <ResponsiveWrapper hideBelow="sm">
            <span style={{ backgroundColor: '#007BFF', color: 'white', padding: '5px' }}>Logo</span>
          </ResponsiveWrapper>
          <ResponsiveWrapper showAbove="md">
            <span style={{ backgroundColor: '#28A745', color: 'white', padding: '5px' }}>Navigation</span>
          </ResponsiveWrapper>
        </StartContainer>
        <EndContainer>
          <ResponsiveWrapper>
            <button style={{ marginRight: '10px' }}>Profile</button>
          </ResponsiveWrapper>
          <ResponsiveWrapper>
            <button>Settings</button>
          </ResponsiveWrapper>
        </EndContainer>
      </PageHeader>
      <SideNav>
        <SideNavItems
          navItems={[
            { icon: 'Home', label: 'Home', to: '/', isActive: true },
            {
              icon: 'Banknote',
              label: 'Donate',
              to: '/donate',
              isNewWindow: true,
            },
            { icon: 'Menu', label: 'Menu', to: '/Menu' },
            { icon: 'Home', label: 'Home', to: '/' },
            {
              icon: 'Banknote',
              label: 'Donate',
              to: '/donate',
              isNewWindow: true,
            },
            { icon: 'Menu', label: 'Menu', to: '/Menu' },
            { icon: 'Home', label: 'Home', to: '/' },
            {
              icon: 'Banknote',
              label: 'Donate',
              to: '/donate',
              isNewWindow: true,
            },
            { icon: 'Menu', label: 'Menu', to: '/Menu' },
            { icon: 'Home', label: 'Home', to: '/' },
            {
              icon: 'Banknote',
              label: 'Donate',
              to: '/donate',
              isNewWindow: true,
            },
            { icon: 'Menu', label: 'Menu', to: '/Menu' },
            { icon: 'Home', label: 'Home', to: '/' },
            {
              icon: 'Banknote',
              label: 'Donate',
              to: '/donate',
              isNewWindow: true,
            },
            { icon: 'Menu', label: 'Menu', to: '/Menu' },
            { icon: 'Home', label: 'Home', to: '/' },
            {
              icon: 'Banknote',
              label: 'Donate',
              to: '/donate',
              isNewWindow: true,
            },
            { icon: 'Menu', label: 'Menu', to: '/Menu' },
            { icon: 'Home', label: 'Home', to: '/' },
            {
              icon: 'Banknote',
              label: 'Donate',
              to: '/donate',
              isNewWindow: true,
            },
            { icon: 'Menu', label: 'Menu', to: '/Menu' },
            { icon: 'Home', label: 'Home', to: '/' },
            {
              icon: 'Banknote',
              label: 'Donate',
              to: '/donate',
              isNewWindow: true,
            },
            { icon: 'Menu', label: 'Menu', to: '/Menu' },
            { icon: 'Home', label: 'Home', to: '/' },
            {
              icon: 'Banknote',
              label: 'Donate',
              to: '/donate',
              isNewWindow: true,
            },
            { icon: 'Menu', label: 'Menu', to: '/Menu' },
            { icon: 'Home', label: 'Home', to: '/' },
            {
              icon: 'Banknote',
              label: 'Donate',
              to: '/donate',
              isNewWindow: true,
            },
            { icon: 'Menu', label: 'Menu', to: '/Menu' },
            { icon: 'Home', label: 'Home', to: '/' },
            {
              icon: 'Banknote',
              label: 'Donate',
              to: '/donate',
              isNewWindow: true,
            },
            { icon: 'Menu', label: 'Menu', to: '/Menu' },
          ]}
        />
        <Separator orientation="horizontal" />
        <SideNavItems
          navItems={[
            { icon: 'Gift', label: 'Gifts', to: '/gifts' },
            { icon: 'LogOut', label: 'Log Out', to: '/', isNewWindow: true },
          ]}
        />
        <SideNavFooter>
          <SideNavItems navItems={footerItems} />
        </SideNavFooter>
      </SideNav>
      <MainContainer>
        <h1>Main Content Area</h1>
        <p>
          Doc. Take care. You'll find out. The future, it's where you're going?
          Doc, is that a de- Wow, you must be rich. Remember, fellas, the future
          is in your hands. If you believe in progress, re-elect Mayor Red
          Thomas, progress is his middle name. Mayor Red Thomas's progress
          platform means more jobs, better education, bigger civic improvements,
          and lower taxes. On election day, cast your vote for a proven leader,
          re-elect Mayor Red Thomas... Uh, Doc. Shut your filthy mouth, I'm not
          that kind of girl. Marty, such a nice name. You have this thing hooked
          up to the car? No, fine, no , good, fine, good. How could I have been
          so careless. One point twenty-one gigawatts. Tom, how am I gonna
          generate that kind of power, it can't be done, it can't. Do you mind
          if we park for a while? After I fell off my toilet, I drew this. Hey
          not too early I sleep in Sunday's, hey McFly, you're shoe's untied,
          don't be so gullible, McFly. Kids, we're gonna have to eat this cake
          by ourselves, Uncle Joey didn't make parole again. I think it would be
          nice, if you all dropped him a line. So tell me, Marty, how long have
          you been in port? Hello. Oh yes sir. I have to tell you about the
          future. Biff. I hope so. It's about the future, isn't it? Uh,
          plutonium, wait a minute, are you telling me that this sucker's
          nuclear? Are those my clocks I hear? Okay Doc, this is it. Well, I
          figured, what the hell. Huh? Ahh. Don't tell me anything. Check out
          that four by four. That is hot. Someday, Jennifer, someday. Wouldn't
          it be great to take that truck up to the lake. Throw a couple of
          sleeping bags in the back. Lie out under the stars. Ah. Good evening,
          I'm Doctor Emmett Brown. I'm standing on the parking lot of Twin Pines
          Mall. It's Saturday morning, October 26, 1985, 1:18 a.m. and this is
          temporal experiment number one. C'mon, Einy, hey hey boy, get in
          there, that a boy, in you go, get down, that's it. I think it's
          terrible. Girls chasing boys. When I was your age I never chased a
          boy, or called a boy, or sat in a parked car with a boy. Are you gonna
          order something, kid? I think it's terrible. Girls chasing boys. When
          I was your age I never chased a boy, or called a boy, or sat in a
          parked car with a boy. Don't say a word. Hi. My god, they found me. I
          don't know how but they found me. Run for it, Marty. My god, they
          found me. I don't know how but they found me. Run for it, Marty. Doc,
          I'm from the future. I came here in a time machine that you invented.
          Now, I need your help to get back to the year 1985. Oh, pleased to
          meet you, Calvin Marty Klein. Do you mind if I sit here? What the hell
          is this? Indeed I will, roll em. I, Doctor Emmett Brown, am about to
          embark on an historic journey. What have I been thinking of, I almost
          forgot to bring some extra plutonium. How did I ever expect to get
          back, one pallet one trip I must be out of my mind. What is it Einy?
          Oh my god, they found me, I don't know how but they found me. Run for
          it, Marty. Yeah, I'm- mayor. Now that's a good idea. I could run for
          mayor. Leave me alone. Holy shit. I'd like you to meet my good friend
          George McFly. Well uh, good, fine. Stop it. Yeah, sure, okay. Well
          looky what we have here. No no no, you're staying right here with me.
          Why is she gonna get angry with you? Shut your filthy mouth, I'm not
          that kind of girl. Good. Have a good trip Einstein, watch your head.
          And where's my reports? Hey, McFly, I thought I told you never to come
          in here. Well it's gonna cost you. How much money you got on you? Yes,
          definitely, god-dammit George, swear. Okay, so now, you come up, you
          punch me in the stomach, I'm out for the count, right? And you and
          Lorraine live happily ever after. Your not gonna be picking a fight,
          Dad, dad dad daddy-o. You're coming to a rescue, right? Okay, let's go
          over the plan again. 8:55, where are you gonna be. This is it. This is
          the answer. It says here that a bolt of lightning is gonna strike the
          clock tower precisely at 10:04 p.m. next Saturday night. If we could
          somehow harness this bolt of lightning, channel it into the flux
          capacitor, it just might work. Next Saturday night, we're sending you
          back to the future. Dammit, Doc, why did you have to tear up that
          letter? If only I had more time. Wait a minute, I got all the time I
          want I got a time machine, I'll just go back and warn him. 10 minutes
          oughta do it. Time-circuits on, flux-capacitor fluxing, engine
          running, alright. No, no no no no, c'mon c'mon. C'mon c'mon, here we
          go, this time. Please, please, c'mon. Evening, Doctor Brown, what's
          with the wire? Mr. McFly, Mr. McFly, this just arrived, oh hi Marty. I
          think it's your new book. The future, it's where you're going? Well
          that's your name, isn't it? Calvin Klein. it's written all over your
          underwear. Oh, I guess they call you Cal, huh? Doc? Am I to understand
          you're still hanging around with Doctor Emmett Brown, McFly? Tardy
          slip for you, Miss Parker. And one for you McFly I believe that makes
          four in a row. Now let me give you a nickle's worth of advice, young
          man. This so called Doctor Brown is dangerous, he's a real nutcase.
          You hang around with him you're gonna end up in big trouble. Time
          machine, I haven't invented any time machine. Don't worry. As long as
          you hit that wire with the connecting hook at precisely 88 miles per
          hour, the instance the lightning strikes the tower, everything will be
          fine. Crazy drunk drivers. Wait a minute, what are you doing, Doc?
          Your, your right. Huh? Marty, you made it. Wait a minute, Doc. What
          are you talking about? What happens to us in the future? What do we
          become assholes or something? Doc, I'm from the future. I came here in
          a time machine that you invented. Now, I need your help to get back to
          the year 1985. Did you hurt your head? Uh, yeah. Over there, on my
          hope chest. I've never seen purple underwear before, Calvin. Radiation
          suit, of course, cause all of the fall out from the atomic wars. This
          is truly amazing, a portable television studio. No wonder your
          president has to be an actor, he's gotta look good on television. Ahh.
          Ahh.
        </p>
      </MainContainer>
      <PageFooter>
        <span>© 2024 Bonterra</span>
        <span>Terms of Service</span>
        <span>Privacy Policy</span>
      </PageFooter>
    </PageLayoutProvider>
  ),
} satisfies Story;
