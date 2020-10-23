import React from 'react'
import './LandingPage.css'

export default function LandingPage() {
    return (
        <div className="landing-page">
            <div className="about">
                <h3>Experience healing</h3>
                <p>This app helps people with their mental health no matter their financial status, everyone deserves a guilty-free release of emotions. With this app you are able to journal without feeling like a burden to those around you.</p>
                <p>Login with demo account credentials or register for an account!</p>
                <p>Username: dunder</p>
                <p>Password: password</p>
            </div>

            <div className="journal-info">
                <h3>Journal your thoughts</h3>
                <p><em>placeholder for screenshot of journal entry interface</em></p>
                <p>The key to healing is to consistently practice better coping mechanisms, bottling your feelings up not only harms you, but those around you. Learn a better way to cope with your experiences.</p>
            </div>

            <div className="affirmation-nfo">
                <h3>Write Daily Affirmations</h3>
                <p><em>placeholder for screenshot of affirmation entry interface</em></p>
                <p>People who struggle with their mental health often feel lost and alone, you don't have to feel that way anymore. Post your own daily affirmations to a public forum to encourage others and read affirmations that others have written to find inspiration and feel connected.</p>
            </div>
            
            <div className="exercise-info">
                <h3>Practice healthier thought processes</h3>
                <p><em>placeholder for screenshot of exercises interface</em></p>
                <p>You don't have to feel helpless any longer, this app has exercises that can help you learn healthier coping mechanisms. This self help section gets you connected with anything from breathing exercises for promoting relaxation and sleep, to grounding exercises to help you when you feel overwelmed.</p>
            </div>

            {/* STRETCH GOAL ADD GOOGLE MAPS API THERPAPISTS NEAR YOU */ }
            {/* <section>
                <h3>Find help based on your resources</h3>
                <p><em>placeholder for screenshot of resources interface</em></p>
                <p>Whether you have insurance or not, this app can get you connected with professionals that are based on your needs and resources. If seeking a professional is something you want but not available at the time, browse natural remedies that will help you until you reach that point. Nothing in here is a "cure-all" but we hope that these will still be beneficial to your overall welness.</p>
            </section> */}
        </div>
        
    )
}