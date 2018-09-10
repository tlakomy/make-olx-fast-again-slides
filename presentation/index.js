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
    thinking: require('../assets/thinking.jpg')
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
                <Slide
                    bgImage={images.thinking.replace('/', '')}
                    bgDarken={0.6}
                >
                    <Heading fit textColor="white">
                        So what was going on?
                    </Heading>
                </Slide>
                <Slide>
                    <Heading fit>
                        Let's go through some of the more <i>interesting</i>{' '}
                        issues
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
                                Pineapple does not belong on a pizza
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>Cooperation is key</ListItem>
                        </Appear>
                    </List>
                </Slide>
                <Slide>
                    <Heading>Thank you!</Heading>
                </Slide>
            </Deck>
        );
    }
}
