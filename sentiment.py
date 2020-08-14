import string
from collections import Counter
import nltk
import matplotlib.pyplot as plt
from nltk.corpus import stopwords
from nltk.sentiment.vader import SentimentIntensityAnalyzer
from nltk.stem import WordNetLemmatizer
from nltk.tokenize import word_tokenize

def getCleanedText():
    text = open('demo.txt', encoding = 'utf-8').read()
    lower = text.lower()
    # print(lower)
    cleaned_text = lower.translate(str.maketrans('','',string.punctuation))
    return cleaned_text

def getTokensFromFile(cleaned_text):
    # print(string.punctuation)
    # print(clean_text)
    # print(tokens)
    # print(stopwords)
    tokenized_words = word_tokenize(cleaned_text, "english")
    return tokenized_words

def getFinalWords(tokenized_words):
    # Removing Stop Words
    final_words = []
    for word in tokenized_words:
        if word not in stopwords.words('english'):
            final_words.append(word)
    return final_words

# print(final_words)
# Lemmatization - From plural to single + Base form of a word (example better-> good)
def getLemmaWords(final_words):
    lemma_words = []
    for word in final_words:
        word = WordNetLemmatizer().lemmatize(word)
        lemma_words.append(word)
    return lemma_words

def getEmotion(lemma_words):
    emotion_list = []
    with open('emotions.txt', 'r') as file:
        for line in file:
            clear_line = line.replace("\n", '').replace(",", '').replace("'", '').strip()
            word, emotion = clear_line.split(':')

            if word in lemma_words:
                emotion_list.append(emotion)

    print(emotion_list)
    w = Counter(emotion_list)
    print(w)
    print("You're mostly feeling{}".format(w.most_common(1)[0][0] if w else None))
    return w


def sentiment_analyse(sentiment_text):
    score = SentimentIntensityAnalyzer().polarity_scores(sentiment_text)
    if score['neg'] > score['pos']:
        print("Negative Sentiment")
    elif score['neg'] < score['pos']:
        print("Positive Sentiment")
    else:
        print("Neutral Sentiment")

w = getEmotion(getLemmaWords(getFinalWords(getTokensFromFile(getCleanedText()))))
sentiment_analyse(getCleanedText())

fig, ax1 = plt.subplots()
ax1.bar(w.keys(), w.values())
fig.autofmt_xdate()
plt.savefig('graph.png')
plt.show()
