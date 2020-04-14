import React from 'react'
import { GmData } from '../data'
import Card from './Card'

export default function GmStats() {
    return (
            <div className="gm-grid">
                {Object.values(GmData).map(obj => <Card key={obj.id} {...obj.gmRanking} />)}
            </ div>
    )
}