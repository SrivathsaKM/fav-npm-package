import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const favNpm = new Schema({
  packageName: {
    type: String,
    required: [true, 'name required'],
  },
  selectedPackageName: {
    type: String,
    required: [true, 'select any 1 option'],
  },
  description: {
    type: String,
    required: [true, 'description required'],
  },

  otherDetails: {
    authorName: {
      type: String,
    },
    packageDescription: {
      type: String,
    },
    version: {
      type: String,
    },
    links: {
      bugs: {
        type: String,
      },
      homepage: {
        type: String,
      },
      npm: {
        type: String,
      },
      repository: {
        type: String,
      },
    },
    publishers: [
      {
        username: {
          type: String,
        },
        email: {
          type: String,
        },
      },
    ],
    maintainers: [
      {
        username: {
          type: String,
        },
        email: {
          type: String,
        },
      },
    ],
    scoreDetail: {
      maintenance: {
        type: Number,
      },
      popularity: {
        type: Number,
      },
      quality: {
        type: Number,
      },
      final: {
        type: Number,
      },
      searchScore: {
        type: Number,
      },
    },
  },
});

const favNPMPackage = mongoose.model('favNPMPackage', favNpm);

export default favNPMPackage;
