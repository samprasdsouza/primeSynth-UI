# Instructions to use ```<CardBuilder/>```

Cards provide a flexible and extensible content container with multiple variants and options. (Cards in each row and columns containers separated by a border) as shown in [this figma design](https://www.figma.com/file/EzHwLyhRo61Npn3uxore3o/Meta?node-id=716%3A46877).
## CARD COMPONENT PROPS

| NAME        | TYPE            | DEFAULT       | DESCRIPTION   |
| ----------- | --------------- | --------- | ----------- |
| title     | string |       | Render a title for the cardBuilder component.     | \
| rowCardCount       | number | 1 | This props indicates number of cards to be displayed in a row. | 
| cardCompleteComponentStyle       | object |  | This props accepts stlye object which can be used to apply styles to the entire card component. | 
| cardBodyClassStyle       | string | p-2 (padding of 8px in all direction) | This props accepts classname as strings which can be used to apply styles to card component. | 
| cardClassStyle       | string | p-2 (padding of 8px in all direction) | This props accepts classname as strings which can be used to apply styles to all the cards of  card body component. | 
| cards       | object | | This props accepts object which used is used to display all the cards of card body component.(Card accepts multiple props which is displayed in table below)|




## CARD BODY COMPONENT PROPS

All th props displayed below are passed as an object into the cards props of the CardBuilder Component  
| NAME        | TYPE            | DEFAULT       | DESCRIPTION   |
| ----------- | --------------- | --------- | ----------- |
| Title     |  Node  |       | Render a title for the a specific card component.     | 
| SubTitle     |  Node  |       | Render a sub-title for the a specific card component.     | 
| Type     |  Node  |       | Render a Type (specific icon/details a the top right corner) for the a specific card component.     | 
| Header     |  string  |      | Render a Header for the card component.     |
| cardStyle     | object  |       | Render a styles for the a specific card component.     |
| Body     |  Node  |       | Render a Body for the a specific card component.     | 
| Footer     |  Node  |       | Render a Footer for the a specific card component.     | 
| FooterType     |  Node  |       | Render a Type (specific icon/details a the bottom right corner) for the a specific card.     | 
| navigateTo     |  string  |    | Render navigateTo Link when user click's on the card component  | 
| openInNewTab     |  boolean  |       | Open navigateTo link in a new tab .     | 
| Tooltip     |  string  |    default no tooltip   | Render a Tooltip for the a specific card component.     | 
| LeftIcon     | Node  |       | Render a Icon on left of the card component.     |
| LeftIconStyle     |  Object  |       | Render a styles to the Icon on the Left of  the a  card component.     | 
| RightIcon     | Node  |       | Render a Icon on Right of the card component.     |
| RightIconStyle     |  Object  |       | Render a styles to the icon on the right of  the a  card component.     | 
| styleBodyCenter     |  boolean  |    false   | Render a card content to the center of the card body component.     | 




## Example for using  `<CardBuilder/>`

```javascript 
export const TestCardBuilder = () => {
    
    const displayCardsData = [
    {
      title: 'Account Manager',
      body: 'Use COAM to Manage Authorisation',
      leftIcon: <AccountsManagerIcon />,
      navigateTo: 'https://users.cimpress.io/'
    },
    {
      title: 'Documentation',
      body: 'Read documentation about the various services of the MCP and how to get started.',
      leftIcon: <DocumentIcon />,
      navigateTo:
        'https://cimpress-support.atlassian.net/wiki/spaces/CI/overview'
    }
  ]

    const displayCards = displayCardsData.map((card) => ({
    Title: (
      <div>
        {card.title?.length > 25
          ? (
            <Tooltip contents={card.title}>
              {' '}
              {card.title?.slice(0, 25) + '...'}
            </Tooltip>
            )
          : (
              card.title
            )}
      </div>
    ),
    Type: <div>{card.type}</div>,
    Body: (
      <div>
          {card.body}
      </div>
    ),
    cardStyle: isEmpty(card.cardStyle)
      ? { borderRadius: '16px', height: '100px' }
      : card.cardStyle,
    navigateTo: card.navigateTo,
    openInNewTab: true,
    Tooltip: card.toolTip,
    styleBodyCenter: true,
  }))

    return (
        <CardBuilder
            cards={displayCards}
            rowCardCount={2}
            title="All Services"
            cardCompleteComponentStyle={{ overflow: 'auto' }}
        />
    )
}
 ```        
