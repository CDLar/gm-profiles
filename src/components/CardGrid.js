import React from 'react'
import Card from './Card'
import { GmData } from '../data'

function CardGrid ({theme,slide}) {
return (
<div className="gm-grid">
                {Object.values(GmData).map(obj =>
                    <Card
                        key={obj.id}
                        champ={obj.championships}
                        heni={obj.henicups}
                        {...obj.gmRanking}
                        theme={theme}
                        seasons={obj.seasons}
                        slide={slide}
                    />)}
            </div>
            )
                }
export default CardGrid 