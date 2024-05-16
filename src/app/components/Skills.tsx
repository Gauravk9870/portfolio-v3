import React from 'react'
import { InfiniteMovingCards } from '../ui/InfiniteMovingCards'

const Skills: React.FC<{ data: any[], padding: number }> = ({ data, padding = 10 }) => {
    return (
        <div className={`overflow-hidden py-${padding}`}>
            <InfiniteMovingCards
                type="skills"
                items={data}
                direction="left"
                speed="slow"
            />
        </div>
    )
}

export default Skills