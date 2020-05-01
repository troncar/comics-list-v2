import React , {useState} from 'react';
//Import Components
import Comic from './commons/Comic';
import Filter from './commons/Filter';

require('./Comics.scss');

const Comics = (props) => {
    const [comicsLists, setComicsLists] = useState(props.comics);
    const [checked, setChecked] = useState(false);

    function handlerFilter(publisher) {
        let filterState;
        let list = props.comics;
        if(publisher !== 'ALL') {
            if(comicsLists.length === 0){
                filterState = list.filter( (comic)  => {
                    return comic.publisher === publisher;
                });
            }
            else {
                filterState = list.filter( (comic) =>  {
                    return comic.publisher === publisher;
                });
                
            }
        }
        else {
            filterState = list;
        }

        setComicsLists(filterState);
        setChecked(!checked);
    }

    const buildComics = (comics) => {
        if(!!comics){
            return comics.map((comic,index) => (
                <Comic key={`${index}--${comic.title}`} 
                title={comic.title} 
                publisher={comic.publisher}
                description={comic.description ?comic.description : 'We dont have description for this comic :(' } 
                price={comic.price}
                release_date={comic.release_date}
                creators={comic.creators}/>
            ))
        }
    }

    const getPublisher = (comics) => {
        // We want to reduce this comicss to only publishers without repeated data.
        let publishers = comics.reduce((publishersTotal, comic) => {
            // If publisher don't exist is added 
            if(publishersTotal.indexOf(comic.publisher)===-1){
                publishersTotal.push(comic.publisher);
            }
            return publishersTotal;
        }, []);

        // We add the option ALL 
        if(publishers.lenght !== 0){
            publishers =  ['ALL', ...publishers];
        }

        return publishers;
    }



    return(
        <div className="containerComics comics">
            {props.comics  && (
                <Filter 
                    publishers={getPublisher(comicsLists)}
                    handlerFilter={ handlerFilter}
                /> 
            )}
            { buildComics(comicsLists) }
        </div>
    )
}

export default Comics;