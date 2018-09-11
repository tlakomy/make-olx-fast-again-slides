// Import React
import React from 'react';

// Import Spectacle Core tags
import {
    Appear,
    BlockQuote,
    Cite,
    Deck,
    Heading,
    ListItem,
    List,
    Magic,
    Image,
    Quote,
    Slide,
    Text
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
    {
        primary: 'black',
        secondary: '#B2FCA9',
        tertiary: '#79e36b',
        quaternary: '#CECECE'
    },
    {
        primary: 'Montserrat',
        secondary: 'Helvetica'
    }
);

const images = {
    olx: require('../assets/olx.png'),
    pagesize: require('../assets/pagesize.png'),
    mexican: require('../assets/mexican.jpg'),
    email: require('../assets/email.png'),
    quake: require('../assets/quake.png'),
    glacier: require('../assets/glacier.png'),
    devtools: require('../assets/devtools.png'),
    radar: require('../assets/radar.png'),
    lato: require('../assets/lato.png'),
    thinking: require('../assets/thinking.jpg'),
    sevenhours: require('../assets/sevenhours.png'),
    tracking: require('../assets/tracking.jpg'),
    managers: require('../assets/managers.jpg'),
    hamsters: require('../assets/hamsters.gif'),
    tumbleweed: require('../assets/tumbleweed.jpg'),
    floppy: require('../assets/floppy.jpg'),
    tracks: require('../assets/tracks.gif'),
    tracks2: require('../assets/tracks2.gif'),
    epic: require('../assets/epic.png'),
    whoops: require('../assets/whoops.png'),
    lte_modem: require('../assets/lte_modem.png'),
    cost: require('../assets/cost.png'),
    newrelic: require('../assets/newrelic.png')
};

export default class Presentation extends React.Component {
    render() {
        return (
            <Deck transition={['fade']} transitionDuration={500} theme={theme}>
                <Slide bgColor="primary" textColor="secondary">
                    <BlockQuote textColor="red">
                        <Quote textColor="secondary">
                            5MB ought to be enough for an OLX ad
                        </Quote>
                        <Cite>Bill Gates</Cite>
                    </BlockQuote>
                </Slide>
                <Slide bgColor="secondary">
                    <Heading fit textColor="primary" margin="0 0 100px 0">
                        Tomasz Łakomy
                    </Heading>
                    <Image
                        fit
                        textColor="primary"
                        bgColor="secondary"
                        src={images.olx.replace('/', '')}
                        height="200"
                        margin={0}
                    />
                </Slide>
                <Slide bgImage={images.mexican.replace('/', '')} />
                <Slide bgColor="secondary">
                    <Heading fit textColor="primary" margin="0 0 100px 0">
                        Tomasz Łakomy
                    </Heading>
                    <Image
                        fit
                        textColor="primary"
                        bgColor="secondary"
                        src={images.olx.replace('/', '')}
                        height="200"
                        margin={0}
                    />
                </Slide>
                <Slide>
                    <Heading>
                        I've been doing JS for a living for the most part of
                        last 6 years
                    </Heading>
                </Slide>
                <Slide>
                    <Heading fit>
                        It <i>changes</i> a man 😐
                    </Heading>
                </Slide>
                <Slide>
                    <Heading fit>But it's not my story</Heading>
                </Slide>
                <Slide>
                    <Heading>This is a story of Make OLX Fast Again 🏎️</Heading>
                </Slide>
                <Slide>
                    <Heading fit>
                        Disclaimer: I joined OLX 6 months ago and I'm not
                        entirely sure whether OLX was fast at some point.
                    </Heading>
                </Slide>
                <Slide>
                    <Heading>Background</Heading>
                </Slide>
                <Slide bgImage={images.pagesize.replace('/', '')} />
                <Slide>
                    <Heading fit>Should OLX be below average? 🤔</Heading>
                </Slide>
                <Slide>
                    <Heading fit>
                        Based on the amount of HD videos we display? 🤔
                    </Heading>
                </Slide>
                <Slide>
                    <Heading fit>Yeah, probably</Heading>
                </Slide>
                <Slide>
                    <Heading fit>So I looked it up 🕵️</Heading>
                </Slide>
                <Slide>
                    <Image
                        fit
                        bgColor="secondary"
                        src={images.email.replace('/', '')}
                        margin={0}
                    />
                </Slide>
                <Slide>
                    <Heading>Some numbers taken from olx.pl</Heading>
                </Slide>
                <Slide>
                    <Heading>Homepage</Heading>
                    <List>
                        <Appear>
                            <ListItem textColor="white">
                                Average bundle size:{' '}
                                <span
                                    style={{
                                        color: '#B2FCA9',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    2.70MB
                                </span>
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem textColor="white">
                                Average number of requests:{' '}
                                <span
                                    style={{
                                        color: '#B2FCA9',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    175
                                </span>
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>
                <Slide>
                    <Heading>Listing page</Heading>
                    <List>
                        <Appear>
                            <ListItem textColor="white">
                                Average bundle size:{' '}
                                <span
                                    style={{
                                        color: '#B2FCA9',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    2.77MB
                                </span>
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem textColor="white">
                                Average number of requests:{' '}
                                <span
                                    style={{
                                        color: '#B2FCA9',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    245
                                </span>
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>
                <Slide>
                    <Heading fit>MY AD ON OLX.PL</Heading>
                    <List>
                        <Appear>
                            <ListItem textColor="white">
                                Average bundle size:{' '}
                                <span
                                    style={{
                                        color: '#B2FCA9',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    3.87MB
                                </span>
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem textColor="white">
                                Average number of requests:{' '}
                                <span
                                    style={{
                                        color: '#B2FCA9',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    278
                                </span>
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>
                <Slide>
                    <Heading fit>
                        Some Ads downloaded way over 5MB of data
                    </Heading>
                </Slide>
                <Slide bgImage={images.quake.replace('/', '')} bgDarken={0.6}>
                    <Heading fit textColor="white">
                        Quake II Demo weighs 3.2MB
                    </Heading>
                    <Cite>http://q2s.tastyspleen.net/</Cite>
                </Slide>
                <Slide>
                    <Image
                        fit
                        bgColor="primary"
                        height="700px"
                        src={images.lte_modem.replace('/', '')}
                        margin={0}
                    />
                </Slide>
                <Slide>
                    <Image
                        fit
                        bgColor="primary"
                        src={images.cost.replace('/', '')}
                        margin={0}
                    />
                </Slide>
                <Slide
                    bgImage={images.thinking.replace('/', '')}
                    bgDarken={0.6}
                >
                    <Heading fit textColor="white">
                        So what was going on?
                    </Heading>
                </Slide>
                <Slide>
                    <Image
                        fit
                        bgColor="secondary"
                        src={images.glacier.replace('/', '')}
                        margin={0}
                        height={600}
                    />
                </Slide>
                <Slide>
                    <Heading fit>100kB per image on every page view</Heading>
                    <List>
                        <Appear>
                            <Image
                                fit
                                bgColor="secondary"
                                src={images.glacier.replace('/', '')}
                                margin={0}
                                height={150}
                            />
                        </Appear>
                        <Appear>
                            <Image
                                fit
                                bgColor="secondary"
                                src={images.glacier.replace('/', '')}
                                margin={0}
                                height={150}
                            />
                        </Appear>
                        <Appear>
                            <Image
                                fit
                                bgColor="secondary"
                                src={images.glacier.replace('/', '')}
                                margin={0}
                                height={150}
                            />
                        </Appear>
                        <Appear>
                            <Image
                                fit
                                bgColor="secondary"
                                src={images.glacier.replace('/', '')}
                                margin={0}
                                height={150}
                            />
                        </Appear>
                    </List>
                </Slide>
                <Slide>
                    <Image
                        fit
                        bgColor="secondary"
                        src={images.devtools.replace('/', '')}
                        margin={0}
                    />
                </Slide>
                <Slide bgImage={images.radar.replace('/', '')} />
                <Slide>
                    <Heading>JavaScript</Heading>
                </Slide>
                <Slide>
                    <Heading fit>
                        Most of our JS comes from external vendors
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem>Tracking</ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>GTM</ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>Ads</ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>1.5MB per page load</ListItem>
                        </Appear>
                    </List>
                </Slide>
                <Slide
                    bgImage={images.tracking.replace('/', '')}
                    bgDarken={0.75}
                >
                    <Heading textColor="white">
                        Do we need all that tracking? 🤔
                    </Heading>
                </Slide>
                <Slide>
                    <Heading>Fonts</Heading>
                </Slide>
                <Slide>
                    <Heading fit>
                        <span style={{ color: 'white' }}>~950kB</span> in fonts
                        per page view
                    </Heading>
                </Slide>
                <Slide>
                    <Image
                        fit
                        bgColor="secondary"
                        src={images.lato.replace('/', '')}
                        height={'200px'}
                        margin={0}
                    />
                </Slide>
                <Slide>
                    <Heading>Okay, how do we address those issues?</Heading>
                </Slide>
                <Slide>
                    <Heading fit>
                        Start a new channel on slack, of course!
                    </Heading>
                </Slide>
                <Slide>
                    <Heading fit>#make-olx-fast-again</Heading>
                </Slide>
                <Slide bgImage={images.sevenhours.replace('/', '')} />
                <Slide bgImage={images.tumbleweed.replace('/', '')} />
                <Slide bgImage={images.managers.replace('/', '')} />
                <Slide>
                    <Image
                        fit
                        bgColor="secondary"
                        src={images.hamsters.replace('/', '')}
                        height={'400px'}
                        margin={0}
                    />
                </Slide>
                <Slide>
                    <Heading fit>
                        We have support from tech, product and marketing
                    </Heading>
                </Slide>
                <Slide>
                    <Heading fit>We even got access to GTM 😎</Heading>
                </Slide>
                <Slide>
                    <Heading>And we've been busy!</Heading>
                </Slide>
                <Slide>
                    <Image
                        fit
                        bgColor="secondary"
                        src={images.epic.replace('/', '')}
                        height={'650px'}
                        margin={0}
                    />
                </Slide>
                <Slide>
                    <Appear>
                        <Heading fit>
                            Removing unnecessary trackers and GTM
                        </Heading>
                    </Appear>
                    <br />
                    <br />
                    <Appear>
                        <Heading fit>Kudos for Jeremy Castan 🎉</Heading>
                    </Appear>
                </Slide>
                <Slide>
                    <Heading>Result?</Heading>
                </Slide>
                <Slide bgImage={images.floppy.replace('/', '')} bgDarken={0.6}>
                    <Heading textColor="white">
                        OLX.pl homepage can now fit on a floppy drive
                    </Heading>
                </Slide>
                <Slide>
                    <Heading>Results</Heading>
                    <List>
                        <Appear>
                            <ListItem>
                                Homepage bundle is{' '}
                                <span style={{ color: 'white' }}>51.8%</span>{' '}
                                smaller
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                Listing bundle is{' '}
                                <span style={{ color: 'white' }}>29.6%</span>{' '}
                                smaller
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                Ad page is{' '}
                                <span style={{ color: 'white' }}>~20%</span>{' '}
                                smaller
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>
                <Slide>
                    <Heading>Next step</Heading>
                </Slide>
                <Slide>
                    <Heading>Tackling high JS error rate</Heading>
                </Slide>
                <Slide>
                    <Heading>
                        On some countries it's{' '}
                        <span style={{ color: 'white' }}>~25%</span>
                    </Heading>
                </Slide>
                <Slide>
                    <Image
                        fit
                        bgColor="secondary"
                        src={images.newrelic.replace('/', '')}
                        height={'500px'}
                        margin={0}
                    />
                </Slide>
                <Slide>
                    <Image
                        fit
                        bgColor="secondary"
                        src={images.tracks.replace('/', '')}
                        height={'650px'}
                        margin={0}
                    />
                </Slide>
                <Slide>
                    <Image
                        fit
                        bgColor="secondary"
                        src={images.tracks2.replace('/', '')}
                        height={'650px'}
                        margin={0}
                    />
                </Slide>
                <Slide>
                    <Heading>It's hard but it's worth it</Heading>
                </Slide>
                <Slide>
                    <Heading>
                        Otherwise you might{' '}
                        <span style={{ color: 'white' }}>miss</span> an
                        important issue on prod
                    </Heading>
                </Slide>
                <Slide>
                    <Heading>Who needs a fast website when it's broken</Heading>
                </Slide>
                <Slide bgImage={images.whoops.replace('/', '')} />
                <Slide>
                    <Heading>
                        We own the experience we provide to our users
                    </Heading>
                </Slide>
                <Slide>
                    <Heading>Key takeaways</Heading>
                    <List>
                        <Appear>
                            <ListItem>Everyone can make an impact</ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                Performance cannot be an afterthought
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                Focus on low hanging fruits first
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                Pineapple does not belong on a pizza
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>Have a plan</ListItem>
                        </Appear>
                    </List>
                </Slide>
                <Slide>
                    <Heading fit>Join #make-olx-fast-again on slack</Heading>
                </Slide>
                <Slide>
                    <Heading>Thank you!</Heading>
                </Slide>
            </Deck>
        );
    }
}
